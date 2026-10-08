import { motion } from 'framer-motion'
import { AlertCircle, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { speakText, stopSpeech } from '../../utils/textToSpeech'

type NarrationControlProps = {
  audioSrc?: string
  textToRead?: string
  onStateChange?: (isPlaying: boolean) => void
  className?: string
  isActive?: boolean
}

export function NarrationControl({
  audioSrc,
  textToRead,
  onStateChange,
  className = '',
  isActive = true,
}: NarrationControlProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [audioError, setAudioError] = useState(false)
  const [isUsingSpeechFallback, setIsUsingSpeechFallback] = useState(false)

  const [prevAudioSrc, setPrevAudioSrc] = useState(audioSrc)

  // Stop audio immediately when component becomes inactive
  useEffect(() => {
    if (!isActive) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      stopSpeech()
      setIsPlaying(false)
      if (onStateChange) onStateChange(false)
    }
  }, [isActive, onStateChange])

  // Reset state when audioSrc prop changes
  if (audioSrc !== prevAudioSrc) {
    setPrevAudioSrc(audioSrc)
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(0)
    setAudioError(!audioSrc)
    setIsUsingSpeechFallback(false)
  }

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Clean up and load new audio on audioSrc change
  useEffect(() => {
    // 1. Stop any currently playing HTML5 audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current = null
    }

    // 2. Stop any active Web Speech TTS fallback
    stopSpeech()

    if (!audioSrc) {
      return
    }

    // Create new HTML5 Audio instance
    const audio = new Audio()
    audio.src = audioSrc
    audio.preload = 'metadata'
    audioRef.current = audio

    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration || 0)
        setAudioError(false)
      }
    }

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime || 0)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      if (onStateChange) onStateChange(false)
    }

    const handleError = () => {
      // Audio file missing or failed to load (e.g. 404 before file is dropped in)
      setAudioError(true)
      setIsPlaying(false)
      if (onStateChange) onStateChange(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
      if (onStateChange) onStateChange(false)
    }

    const handlePlay = () => {
      setIsPlaying(true)
      if (onStateChange) onStateChange(true)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('play', handlePlay)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('play', handlePlay)
      audio.pause()
      audio.currentTime = 0
    }
  }, [audioSrc, onStateChange])

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      stopSpeech()
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      if (isUsingSpeechFallback) {
        stopSpeech()
        setIsPlaying(false)
        if (onStateChange) onStateChange(false)
      } else if (audioRef.current) {
        audioRef.current.pause()
      }
    } else {
      // Play
      if (!audioError && audioRef.current) {
        audioRef.current.muted = isMuted
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay policy or load error -> fallback to Speech API
            if (textToRead) {
              triggerSpeechFallback()
            }
          })
        }
      } else if (textToRead) {
        triggerSpeechFallback()
      }
    }
  }

  const triggerSpeechFallback = () => {
    if (!textToRead) return
    setIsUsingSpeechFallback(true)
    setIsPlaying(true)
    if (onStateChange) onStateChange(true)

    const success = speakText(
      textToRead,
      () => {
        setIsPlaying(false)
        setIsUsingSpeechFallback(false)
        if (onStateChange) onStateChange(false)
      },
      () => {
        setIsPlaying(true)
      },
    )

    if (!success) {
      setIsPlaying(false)
      setIsUsingSpeechFallback(false)
      if (onStateChange) onStateChange(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (audioRef.current) {
      audioRef.current.muted = nextMuted
    }
  }

  // Calculate SVG progress ring offset
  const progressRatio = duration > 0 ? currentTime / duration : 0
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - progressRatio * circumference

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-md backdrop-blur-md text-slate-100 ${className}`}
    >
      {/* Main Play / Pause Button with Progress Ring */}
      <motion.button
        type="button"
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? 'Pause narration' : 'Play narration'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Pause Narration' : 'Play Narration'}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer min-w-[40px] min-h-[40px]"
      >
        {/* Subtle Progress Ring */}
        {duration > 0 && !isUsingSpeechFallback && (
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-amber-950/20"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-amber-950 transition-all duration-200"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}

        {isPlaying ? (
          <Pause className="w-5 h-5 text-slate-950 fill-current" aria-hidden />
        ) : (
          <Play className="w-5 h-5 text-slate-950 fill-current ml-0.5" aria-hidden />
        )}
      </motion.button>

      {/* Label and Speaker Icon */}
      <div className="flex items-center gap-1.5 text-xs font-semibold px-1">
        <Volume2
          className={`w-4 h-4 text-amber-300 ${isPlaying ? 'animate-pulse' : ''}`}
          aria-hidden
        />
        <span className="text-slate-200 select-none">
          {isPlaying ? 'Listening...' : 'Narration'}
        </span>
      </div>

      {/* Mute Button */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-rose-400" aria-hidden />
        ) : (
          <Volume2 className="w-4 h-4 text-slate-300" aria-hidden />
        )}
      </button>

      {/* Subtle indicator if file is pending drop-in & using TTS */}
      {audioError && isPlaying && isUsingSpeechFallback && (
        <span
          title="Playing auto-read narration"
          className="flex items-center text-[10px] text-amber-300/80 px-1"
        >
          <AlertCircle className="w-3 h-3 text-amber-400 mr-1 inline" aria-hidden />
          Read
        </span>
      )}
    </div>
  )
}

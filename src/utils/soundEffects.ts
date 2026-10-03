// Web Audio API sound synthesizer for interactive story objects

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

export function playSound(
  soundOrAnimationType?: string,
  isMuted: boolean = false,
): void {
  if (isMuted) return

  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const type = (soundOrAnimationType || '').toLowerCase()

    if (
      type.includes('glow') ||
      type.includes('twinkle') ||
      type.includes('sparkle')
    ) {
      // Gentle ascending bell chime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(587.33, now) // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15) // A5
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.35) // D6

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.65)
    } else if (
      type.includes('move') ||
      type.includes('whoosh') ||
      type.includes('swoosh')
    ) {
      // Gentle wind breeze sound
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(220, now)
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.2)
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.45)

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.linearRampToValueAtTime(0.15, now + 0.2)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.55)
    } else if (
      type.includes('wave') ||
      type.includes('hello') ||
      type.includes('chime')
    ) {
      // Friendly 3-note greeting chime
      const freqs = [523.25, 659.25, 783.99] // C5, E5, G5
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const startTime = now + idx * 0.1
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, startTime)

        gain.gain.setValueAtTime(0.12, startTime)
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(startTime)
        osc.stop(startTime + 0.35)
      })
    } else if (
      type.includes('flap') ||
      type.includes('rustle') ||
      type.includes('bird') ||
      type.includes('hoot')
    ) {
      // Soft wing flutter tap
      ;[0, 0.12, 0.24].forEach((delay) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const startTime = now + delay
        osc.type = 'sine'
        osc.frequency.setValueAtTime(320, startTime)
        osc.frequency.exponentialRampToValueAtTime(180, startTime + 0.08)

        gain.gain.setValueAtTime(0.1, startTime)
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.09)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(startTime)
        osc.stop(startTime + 0.1)
      })
    } else if (
      type.includes('hop') ||
      type.includes('boing') ||
      type.includes('rabbit')
    ) {
      // Cartoon boing pitch slide
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(180, now)
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.15)
      osc.frequency.exponentialRampToValueAtTime(340, now + 0.35)

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.45)
    } else if (
      type.includes('shake') ||
      type.includes('lift') ||
      type.includes('rocket')
    ) {
      // Rocket launch sweep tone
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(140, now)
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.4)

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.55)
    } else if (
      type.includes('rotate') ||
      type.includes('whir') ||
      type.includes('spin')
    ) {
      // Spin whir sound
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(300, now)
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.25)
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.45)

      gain.gain.setValueAtTime(0.1, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.55)
    } else {
      // Default pleasant bubble pop
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(400, now)
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.12)

      gain.gain.setValueAtTime(0.15, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.25)
    }
  } catch {
    // Safe fallback if AudioContext is not allowed or supported
  }
}

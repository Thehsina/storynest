// StoryNest Female Storyteller Voice Engine
// Sweet, youthful, warm, bright, and expressive female narration for children's stories

function selectFemaleStorytellerVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null

  // Priority order for sweet, youthful, warm female storytelling voices
  const preferredVoiceNames = [
    'Microsoft Ana Online (Natural)',
    'Microsoft Jenny Online (Natural)',
    'Microsoft Aria Online (Natural)',
    'Google UK English Female',
    'Google US English',
    'Samantha',
    'Victoria',
    'Karen',
    'Microsoft Zira',
    'Zira',
    'Fiona',
    'Moira',
    'Siri',
  ]

  for (const name of preferredVoiceNames) {
    const found = voices.find(
      (v) =>
        v.name.toLowerCase().includes(name.toLowerCase()) &&
        v.lang.startsWith('en'),
    )
    if (found) return found
  }

  // Fallback: any English female voice (exclude known male names)
  const femaleFallback = voices.find((v) => {
    const n = v.name.toLowerCase()
    return (
      v.lang.startsWith('en') &&
      !n.includes('male') &&
      !n.includes('david') &&
      !n.includes('mark') &&
      !n.includes('george') &&
      !n.includes('guy') &&
      !n.includes('stefan') &&
      !n.includes('james') &&
      !n.includes('richard')
    )
  })

  return femaleFallback || voices.find((v) => v.lang.startsWith('en')) || null
}

export function speakText(
  text: string,
  onEnd?: () => void,
  onStart?: () => void,
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false
  }

  try {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Voice Selection: Sweet, youthful female voice
    const availableVoices = window.speechSynthesis.getVoices()
    const femaleVoice = selectFemaleStorytellerVoice(availableVoices)
    if (femaleVoice) {
      utterance.voice = femaleVoice
    }

    // Emotion & Tone Tuning for Storytelling
    const lowerText = text.toLowerCase()

    let basePitch = 1.26 // Sweet, youthful, feminine pitch
    let baseRate = 0.88 // Warm, conversational, clear storytelling pace

    // Exciting / Surprising / Magical moments
    if (
      text.includes('!') ||
      lowerText.includes('suddenly') ||
      lowerText.includes('brightly') ||
      lowerText.includes('hug') ||
      lowerText.includes('starship') ||
      lowerText.includes('surprised') ||
      lowerText.includes('magic')
    ) {
      basePitch = 1.32 // Cheerful, excited rise
      baseRate = 0.92
    }
    // Bedtime / Soft / Calming endings
    else if (
      lowerText.includes('sleep') ||
      lowerText.includes('whispered') ||
      lowerText.includes('lullaby') ||
      lowerText.includes('softly') ||
      lowerText.includes('night') ||
      lowerText.includes('rest') ||
      lowerText.includes('gentle')
    ) {
      basePitch = 1.22 // Soft, soothing warmth
      baseRate = 0.82
    }
    // Playful / Fun scenes
    else if (
      lowerText.includes('bunny') ||
      lowerText.includes('hop') ||
      lowerText.includes('scampered') ||
      lowerText.includes('crabs') ||
      lowerText.includes('party') ||
      lowerText.includes('drew')
    ) {
      basePitch = 1.28 // Playful, bright
      baseRate = 0.9
    }

    utterance.pitch = basePitch
    utterance.rate = baseRate
    utterance.lang = 'en-US'

    if (onStart) utterance.onstart = onStart
    if (onEnd) utterance.onend = onEnd
    utterance.onerror = () => {
      if (onEnd) onEnd()
    }

    window.speechSynthesis.speak(utterance)
    return true
  } catch {
    if (onEnd) onEnd()
    return false
  }
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel()
    } catch {
      // ignore
    }
  }
}

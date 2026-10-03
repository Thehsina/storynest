import type { InteractiveObject } from '../../types'
import { InteractiveScene } from './InteractiveScene'

type InteractiveObjectOverlayProps = {
  interactiveObjects?: InteractiveObject[]
  isMuted?: boolean
}

export function InteractiveObjectOverlay({
  interactiveObjects = [],
  isMuted = false,
}: InteractiveObjectOverlayProps) {
  return (
    <InteractiveScene
      interactiveObjects={interactiveObjects}
      isMuted={isMuted}
    />
  )
}

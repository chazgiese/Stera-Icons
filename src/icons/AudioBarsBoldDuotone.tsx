import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsBoldDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-bold-duotone" {...props}>
      <path d="M9 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M21 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M15 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M3 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AudioBarsBoldDuotone.displayName = 'AudioBarsBoldDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsBoldDuotone, AudioBarsBoldDuotone as AudioBarsBoldDuotoneIcon, AudioBarsBoldDuotone as SiAudioBarsBoldDuotone };
export default AudioBarsBoldDuotone;
export type { AudioBarsBoldDuotoneProps };

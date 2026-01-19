import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsFillDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-fill-duotone" {...props}>
      <path d="M9 2.5c.83 0 1.5.67 1.5 1.5v16a1.5 1.5 0 0 1-3 0V4c0-.83.67-1.5 1.5-1.5M21 8.5c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M15 5.5c.83 0 1.5.67 1.5 1.5v10a1.5 1.5 0 0 1-3 0V7c0-.83.67-1.5 1.5-1.5M3 8.5c.83 0 1.5.67 1.5 1.5v4a1.5 1.5 0 0 1-3 0v-4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AudioBarsFillDuotone.displayName = 'AudioBarsFillDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsFillDuotone, AudioBarsFillDuotone as AudioBarsFillDuotoneIcon, AudioBarsFillDuotone as SiAudioBarsFillDuotone };
export default AudioBarsFillDuotone;
export type { AudioBarsFillDuotoneProps };

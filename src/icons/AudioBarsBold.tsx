import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsBoldProps = Omit<IconBaseProps, 'children'>;

const AudioBarsBold = memo(
  forwardRef<SVGSVGElement, AudioBarsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-bold" {...props}>
      <path fill="currentColor" d="M9 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M15 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M3 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M21 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AudioBarsBold.displayName = 'AudioBarsBold';

// Triple export pattern (lucide-react style)
export { AudioBarsBold, AudioBarsBold as AudioBarsBoldIcon, AudioBarsBold as SiAudioBarsBold };
export default AudioBarsBold;
export type { AudioBarsBoldProps };

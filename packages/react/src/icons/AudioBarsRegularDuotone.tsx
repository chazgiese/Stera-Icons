import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsRegularDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75M21 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M15 6.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75M3 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsRegularDuotone.displayName = 'AudioBarsRegularDuotone';

// Triple export pattern (lucide-react style)
export { AudioBarsRegularDuotone, AudioBarsRegularDuotone as AudioBarsRegularDuotoneIcon, AudioBarsRegularDuotone as SiAudioBarsRegularDuotone };
export type { AudioBarsRegularDuotoneProps };

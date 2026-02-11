import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsRegularProps = Omit<IconBaseProps, 'children'>;

const AudioBarsRegular = memo(
  forwardRef<SVGSVGElement, AudioBarsRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars" {...props}>
      <path d="M9.5 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75M14.5 6.25c.41 0 .75.34.75.75v10a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75M4.5 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M19.5 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsRegular.displayName = 'AudioBarsRegular';

// Triple export pattern (lucide-react style)
export { AudioBarsRegular, AudioBarsRegular as AudioBarsRegularIcon, AudioBarsRegular as SiAudioBarsRegular };
export default AudioBarsRegular;
export type { AudioBarsRegularProps };

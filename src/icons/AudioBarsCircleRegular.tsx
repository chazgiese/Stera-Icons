import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleRegularProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleRegular = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-circle" {...props}>
      <path d="M10.67 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.33-.75.75-.75M13.33 8.75c.42 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75M8 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M16 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleRegular.displayName = 'AudioBarsCircleRegular';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleRegular, AudioBarsCircleRegular as AudioBarsCircleRegularIcon, AudioBarsCircleRegular as SiAudioBarsCircleRegular };
export default AudioBarsCircleRegular;
export type { AudioBarsCircleRegularProps };

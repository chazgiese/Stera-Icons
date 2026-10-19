import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M10.67 7.25c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75V8c0-.41.33-.75.75-.75M13.33 8.75c.42 0 .75.34.75.75v5c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75M8 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75M16 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AudioBarsCircleRegularDuotone.displayName = 'AudioBarsCircleRegularDuotone';

// Triple export pattern
export { AudioBarsCircleRegularDuotone, AudioBarsCircleRegularDuotone as AudioBarsCircleRegularDuotoneIcon, AudioBarsCircleRegularDuotone as SiAudioBarsCircleRegularDuotone };
export default AudioBarsCircleRegularDuotone;
export type { AudioBarsCircleRegularDuotoneProps };

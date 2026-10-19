import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleFill = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-1.33 5c-.42 0-.75.34-.75.75v9c0 .41.33.75.75.75.41 0 .75-.34.75-.75v-9c0-.41-.34-.75-.75-.75m2.66 2c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75.42 0 .75-.34.75-.75v-5c0-.41-.33-.75-.75-.75M8 10.25c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75m8 0c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleFill.displayName = 'AudioBarsCircleFill';

// Triple export pattern
export { AudioBarsCircleFill, AudioBarsCircleFill as AudioBarsCircleFillIcon, AudioBarsCircleFill as SiAudioBarsCircleFill };
export default AudioBarsCircleFill;
export type { AudioBarsCircleFillProps };

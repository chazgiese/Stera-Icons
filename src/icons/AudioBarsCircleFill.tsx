import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleFill = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-1.33 4.75a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m2.66 2a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M8 10.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75m8 0a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleFill.displayName = 'AudioBarsCircleFill';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleFill, AudioBarsCircleFill as AudioBarsCircleFillIcon, AudioBarsCircleFill as SiAudioBarsCircleFill };
export default AudioBarsCircleFill;
export type { AudioBarsCircleFillProps };

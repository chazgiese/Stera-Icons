import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AudioBarsCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleBold = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-circle-bold" {...props}>
      <path fill="currentColor" d="M10.67 6.5a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0v-9a1 1 0 0 1 1-1M13.33 8.5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1M8 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleBold.displayName = 'AudioBarsCircleBold';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleBold, AudioBarsCircleBold as AudioBarsCircleBoldIcon, AudioBarsCircleBold as SiAudioBarsCircleBold };
export default AudioBarsCircleBold;
export type { AudioBarsCircleBoldProps };

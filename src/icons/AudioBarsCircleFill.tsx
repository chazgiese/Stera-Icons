import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AudioBarsCircleFillProps = Omit<IconBaseProps, 'children'>;

const AudioBarsCircleFill = memo(
  forwardRef<SVGSVGElement, AudioBarsCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="audio-bars-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-1.67 5a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m3.34 2a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1M7 10a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AudioBarsCircleFill.displayName = 'AudioBarsCircleFill';

// Triple export pattern (lucide-react style)
export { AudioBarsCircleFill, AudioBarsCircleFill as AudioBarsCircleFillIcon, AudioBarsCircleFill as SiAudioBarsCircleFill };
export type { AudioBarsCircleFillProps };

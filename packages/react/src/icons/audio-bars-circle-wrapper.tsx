import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsCircleIcon as RegularAudioBarsCircleIcon } from './audio-bars-circle';
import { AudioBarsCircleIconDuotone as AudioBarsCircleIconDuotone } from './audio-bars-circle-duotone';
import { AudioBarsCircleIconBold as AudioBarsCircleIconBold } from './audio-bars-circle-bold';
import { AudioBarsCircleIconBoldDuotone as AudioBarsCircleIconBoldDuotone } from './audio-bars-circle-bold-duotone';
import { AudioBarsCircleIconFill as AudioBarsCircleIconFill } from './audio-bars-circle-fill';
import { AudioBarsCircleIconFillDuotone as AudioBarsCircleIconFillDuotone } from './audio-bars-circle-fill-duotone';

export interface AudioBarsCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AudioBarsCircleIcon = memo(forwardRef<SVGSVGElement, AudioBarsCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AudioBarsCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AudioBarsCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AudioBarsCircleIconFill ref={ref} {...props} />;
  if (duotone) return <AudioBarsCircleIconDuotone ref={ref} {...props} />;
  return <RegularAudioBarsCircleIcon ref={ref} {...props} />;
}));

AudioBarsCircleIcon.displayName = 'AudioBarsCircleIcon';

export { AudioBarsCircleIcon };

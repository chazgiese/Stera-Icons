import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsIcon as RegularAudioBarsIcon } from './audio-bars';
import { AudioBarsIconDuotone as AudioBarsIconDuotone } from './audio-bars-duotone';
import { AudioBarsIconBold as AudioBarsIconBold } from './audio-bars-bold';
import { AudioBarsIconBoldDuotone as AudioBarsIconBoldDuotone } from './audio-bars-bold-duotone';
import { AudioBarsIconFill as AudioBarsIconFill } from './audio-bars-fill';
import { AudioBarsIconFillDuotone as AudioBarsIconFillDuotone } from './audio-bars-fill-duotone';

export interface AudioBarsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AudioBarsIcon = memo(forwardRef<SVGSVGElement, AudioBarsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AudioBarsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AudioBarsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AudioBarsIconFill ref={ref} {...props} />;
  if (duotone) return <AudioBarsIconDuotone ref={ref} {...props} />;
  return <RegularAudioBarsIcon ref={ref} {...props} />;
}));

AudioBarsIcon.displayName = 'AudioBarsIcon';

export { AudioBarsIcon };

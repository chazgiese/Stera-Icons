import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsSquareIcon as RegularAudioBarsSquareIcon } from './audio-bars-square';
import { AudioBarsSquareIconDuotone as AudioBarsSquareIconDuotone } from './audio-bars-square-duotone';
import { AudioBarsSquareIconBold as AudioBarsSquareIconBold } from './audio-bars-square-bold';
import { AudioBarsSquareIconBoldDuotone as AudioBarsSquareIconBoldDuotone } from './audio-bars-square-bold-duotone';
import { AudioBarsSquareIconFill as AudioBarsSquareIconFill } from './audio-bars-square-fill';
import { AudioBarsSquareIconFillDuotone as AudioBarsSquareIconFillDuotone } from './audio-bars-square-fill-duotone';

export interface AudioBarsSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AudioBarsSquareIcon = memo(forwardRef<SVGSVGElement, AudioBarsSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AudioBarsSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AudioBarsSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AudioBarsSquareIconFill ref={ref} {...props} />;
  if (duotone) return <AudioBarsSquareIconDuotone ref={ref} {...props} />;
  return <RegularAudioBarsSquareIcon ref={ref} {...props} />;
}));

AudioBarsSquareIcon.displayName = 'AudioBarsSquareIcon';

export { AudioBarsSquareIcon };

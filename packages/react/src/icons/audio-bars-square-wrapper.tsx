import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AudioBarsSquareIcon as RegularAudioBarsSquareIcon } from './audio-bars-square';
import { AudioBarsSquareIconBold } from './audio-bars-square-bold';
import { AudioBarsSquareIconFilled } from './audio-bars-square-filled';
import { AudioBarsSquareIconFilltone } from './audio-bars-square-filltone';
import { AudioBarsSquareIconLinetone } from './audio-bars-square-linetone';

export interface AudioBarsSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const AudioBarsSquareIcon = memo(forwardRef<SVGSVGElement, AudioBarsSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AudioBarsSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AudioBarsSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AudioBarsSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AudioBarsSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAudioBarsSquareIcon ref={ref} {...props} />;
  }
}));

AudioBarsSquareIcon.displayName = 'AudioBarsSquareIcon';

export { AudioBarsSquareIcon };

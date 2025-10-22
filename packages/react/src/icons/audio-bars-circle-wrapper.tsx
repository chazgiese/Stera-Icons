import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AudioBarsCircleIcon as RegularAudioBarsCircleIcon } from './audio-bars-circle';
import { AudioBarsCircleIconBold } from './audio-bars-circle-bold';
import { AudioBarsCircleIconFilled } from './audio-bars-circle-filled';
import { AudioBarsCircleIconFilltone } from './audio-bars-circle-filltone';
import { AudioBarsCircleIconLinetone } from './audio-bars-circle-linetone';

export interface AudioBarsCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const AudioBarsCircleIcon = memo(forwardRef<SVGSVGElement, AudioBarsCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AudioBarsCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AudioBarsCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AudioBarsCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AudioBarsCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAudioBarsCircleIcon ref={ref} {...props} />;
  }
}));

AudioBarsCircleIcon.displayName = 'AudioBarsCircleIcon';

export { AudioBarsCircleIcon };

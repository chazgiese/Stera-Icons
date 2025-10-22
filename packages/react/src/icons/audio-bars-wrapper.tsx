import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AudioBarsIcon as AudioBarsIconRegular } from './audio-bars';
import { AudioBarsIconBold } from './audio-bars-bold';
import { AudioBarsIconFilled } from './audio-bars-filled';
import { AudioBarsIconFilltone } from './audio-bars-filltone';
import { AudioBarsIconLinetone } from './audio-bars-linetone';

export interface AudioBarsIconProps extends IconProps {
  variant?: IconVariant;
}

const AudioBarsIcon = memo(forwardRef<SVGSVGElement, AudioBarsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AudioBarsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AudioBarsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AudioBarsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AudioBarsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AudioBarsIconRegular ref={ref} {...props} />;
  }
}));

AudioBarsIcon.displayName = 'AudioBarsIcon';

export { AudioBarsIcon };

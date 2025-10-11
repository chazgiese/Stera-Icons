import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsIcon as AudioBarsIconRegular } from './audio-bars';
import { AudioBarsIconBold } from './audio-bars-bold';
import { AudioBarsIconFilled } from './audio-bars-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AudioBarsIconRegular ref={ref} {...props} />;
  }
}));

AudioBarsIcon.displayName = 'AudioBarsIcon';

export { AudioBarsIcon };

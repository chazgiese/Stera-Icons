import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsCircleIcon as AudioBarsCircleIconRegular } from './audio-bars-circle';
import { AudioBarsCircleIconBold } from './audio-bars-circle-bold';
import { AudioBarsCircleIconFilled } from './audio-bars-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AudioBarsCircleIconRegular ref={ref} {...props} />;
  }
}));

AudioBarsCircleIcon.displayName = 'AudioBarsCircleIcon';

export { AudioBarsCircleIcon };

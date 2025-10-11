import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsSquareIcon as AudioBarsSquareIconRegular } from './audio-bars-square';
import { AudioBarsSquareIconBold } from './audio-bars-square-bold';
import { AudioBarsSquareIconFilled } from './audio-bars-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AudioBarsSquareIconRegular ref={ref} {...props} />;
  }
}));

AudioBarsSquareIcon.displayName = 'AudioBarsSquareIcon';

export { AudioBarsSquareIcon };

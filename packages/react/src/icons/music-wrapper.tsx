import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MusicIcon as MusicIconRegular } from './music';
import { MusicIconBold } from './music-bold';
import { MusicIconFilled } from './music-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MusicIconProps extends IconProps {
  variant?: IconVariant;
}

const MusicIcon = memo(forwardRef<SVGSVGElement, MusicIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MusicIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MusicIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MusicIconRegular ref={ref} {...props} />;
  }
}));

MusicIcon.displayName = 'MusicIcon';

export { MusicIcon };

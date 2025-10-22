import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MusicIcon as RegularMusicIcon } from './music';
import { MusicIconBold } from './music-bold';
import { MusicIconFilled } from './music-filled';
import { MusicIconFilltone } from './music-filltone';
import { MusicIconLinetone } from './music-linetone';

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
    case 'filltone':
      return <MusicIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MusicIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMusicIcon ref={ref} {...props} />;
  }
}));

MusicIcon.displayName = 'MusicIcon';

export { MusicIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvPlayIcon as TvPlayIconRegular } from './tv-play';
import { TvPlayIconBold } from './tv-play-bold';
import { TvPlayIconFilled } from './tv-play-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TvPlayIconProps extends IconProps {
  variant?: IconVariant;
}

const TvPlayIcon = memo(forwardRef<SVGSVGElement, TvPlayIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TvPlayIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TvPlayIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TvPlayIconRegular ref={ref} {...props} />;
  }
}));

TvPlayIcon.displayName = 'TvPlayIcon';

export { TvPlayIcon };

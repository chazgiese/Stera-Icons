import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvIcon as TvIconRegular } from './tv';
import { TvIconBold } from './tv-bold';
import { TvIconFilled } from './tv-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TvIconProps extends IconProps {
  variant?: IconVariant;
}

const TvIcon = memo(forwardRef<SVGSVGElement, TvIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TvIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TvIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TvIconRegular ref={ref} {...props} />;
  }
}));

TvIcon.displayName = 'TvIcon';

export { TvIcon };

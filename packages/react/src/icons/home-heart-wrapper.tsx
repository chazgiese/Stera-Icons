import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeHeartIcon as HomeHeartIconRegular } from './home-heart';
import { HomeHeartIconBold } from './home-heart-bold';
import { HomeHeartIconFilled } from './home-heart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HomeHeartIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeHeartIcon = memo(forwardRef<SVGSVGElement, HomeHeartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeHeartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeHeartIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HomeHeartIconRegular ref={ref} {...props} />;
  }
}));

HomeHeartIcon.displayName = 'HomeHeartIcon';

export { HomeHeartIcon };

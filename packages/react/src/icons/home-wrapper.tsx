import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeIcon as HomeIconRegular } from './home';
import { HomeIconBold } from './home-bold';
import { HomeIconFilled } from './home-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HomeIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeIcon = memo(forwardRef<SVGSVGElement, HomeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HomeIconRegular ref={ref} {...props} />;
  }
}));

HomeIcon.displayName = 'HomeIcon';

export { HomeIcon };

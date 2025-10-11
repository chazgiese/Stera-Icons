import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeXIcon as HomeXIconRegular } from './home-x';
import { HomeXIconBold } from './home-x-bold';
import { HomeXIconFilled } from './home-x-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HomeXIconProps extends IconProps {
  variant?: IconVariant;
}

const HomeXIcon = memo(forwardRef<SVGSVGElement, HomeXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomeXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomeXIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HomeXIconRegular ref={ref} {...props} />;
  }
}));

HomeXIcon.displayName = 'HomeXIcon';

export { HomeXIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomePlusIcon as HomePlusIconRegular } from './home-plus';
import { HomePlusIconBold } from './home-plus-bold';
import { HomePlusIconFilled } from './home-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HomePlusIconProps extends IconProps {
  variant?: IconVariant;
}

const HomePlusIcon = memo(forwardRef<SVGSVGElement, HomePlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HomePlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HomePlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HomePlusIconRegular ref={ref} {...props} />;
  }
}));

HomePlusIcon.displayName = 'HomePlusIcon';

export { HomePlusIcon };

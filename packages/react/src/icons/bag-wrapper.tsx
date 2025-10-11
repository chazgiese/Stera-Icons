import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BagIcon as BagIconRegular } from './bag';
import { BagIconBold } from './bag-bold';
import { BagIconFilled } from './bag-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BagIconProps extends IconProps {
  variant?: IconVariant;
}

const BagIcon = memo(forwardRef<SVGSVGElement, BagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BagIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BagIconRegular ref={ref} {...props} />;
  }
}));

BagIcon.displayName = 'BagIcon';

export { BagIcon };

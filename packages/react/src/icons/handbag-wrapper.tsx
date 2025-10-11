import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandbagIcon as HandbagIconRegular } from './handbag';
import { HandbagIconBold } from './handbag-bold';
import { HandbagIconFilled } from './handbag-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HandbagIconProps extends IconProps {
  variant?: IconVariant;
}

const HandbagIcon = memo(forwardRef<SVGSVGElement, HandbagIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandbagIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandbagIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HandbagIconRegular ref={ref} {...props} />;
  }
}));

HandbagIcon.displayName = 'HandbagIcon';

export { HandbagIcon };

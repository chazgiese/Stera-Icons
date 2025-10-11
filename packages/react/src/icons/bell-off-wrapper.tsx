import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellOffIcon as BellOffIconRegular } from './bell-off';
import { BellOffIconBold } from './bell-off-bold';
import { BellOffIconFilled } from './bell-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BellOffIconProps extends IconProps {
  variant?: IconVariant;
}

const BellOffIcon = memo(forwardRef<SVGSVGElement, BellOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellOffIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BellOffIconRegular ref={ref} {...props} />;
  }
}));

BellOffIcon.displayName = 'BellOffIcon';

export { BellOffIcon };

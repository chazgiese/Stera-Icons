import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DollarBillIcon as DollarBillIconRegular } from './dollar-bill';
import { DollarBillIconBold } from './dollar-bill-bold';
import { DollarBillIconFilled } from './dollar-bill-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DollarBillIconProps extends IconProps {
  variant?: IconVariant;
}

const DollarBillIcon = memo(forwardRef<SVGSVGElement, DollarBillIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DollarBillIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DollarBillIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DollarBillIconRegular ref={ref} {...props} />;
  }
}));

DollarBillIcon.displayName = 'DollarBillIcon';

export { DollarBillIcon };

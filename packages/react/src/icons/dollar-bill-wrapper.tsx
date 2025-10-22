import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DollarBillIcon as DollarBillIconRegular } from './dollar-bill';
import { DollarBillIconBold } from './dollar-bill-bold';
import { DollarBillIconFilled } from './dollar-bill-filled';
import { DollarBillIconFilltone } from './dollar-bill-filltone';
import { DollarBillIconLinetone } from './dollar-bill-linetone';

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
    case 'filltone':
      return <DollarBillIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DollarBillIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DollarBillIconRegular ref={ref} {...props} />;
  }
}));

DollarBillIcon.displayName = 'DollarBillIcon';

export { DollarBillIcon };

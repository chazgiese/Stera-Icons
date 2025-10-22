import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ReceiptIcon as RegularReceiptIcon } from './receipt';
import { ReceiptIconBold } from './receipt-bold';
import { ReceiptIconFilled } from './receipt-filled';
import { ReceiptIconFilltone } from './receipt-filltone';
import { ReceiptIconLinetone } from './receipt-linetone';

export interface ReceiptIconProps extends IconProps {
  variant?: IconVariant;
}

const ReceiptIcon = memo(forwardRef<SVGSVGElement, ReceiptIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ReceiptIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ReceiptIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ReceiptIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ReceiptIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularReceiptIcon ref={ref} {...props} />;
  }
}));

ReceiptIcon.displayName = 'ReceiptIcon';

export { ReceiptIcon };

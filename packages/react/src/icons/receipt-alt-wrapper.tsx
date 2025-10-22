import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ReceiptAltIcon as ReceiptAltIconRegular } from './receipt-alt';
import { ReceiptAltIconBold } from './receipt-alt-bold';
import { ReceiptAltIconFilled } from './receipt-alt-filled';
import { ReceiptAltIconFilltone } from './receipt-alt-filltone';
import { ReceiptAltIconLinetone } from './receipt-alt-linetone';

export interface ReceiptAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ReceiptAltIcon = memo(forwardRef<SVGSVGElement, ReceiptAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ReceiptAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ReceiptAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ReceiptAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ReceiptAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ReceiptAltIconRegular ref={ref} {...props} />;
  }
}));

ReceiptAltIcon.displayName = 'ReceiptAltIcon';

export { ReceiptAltIcon };

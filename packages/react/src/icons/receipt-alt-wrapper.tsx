import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptAltIcon as ReceiptAltIconRegular } from './receipt-alt';
import { ReceiptAltIconBold } from './receipt-alt-bold';
import { ReceiptAltIconFilled } from './receipt-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ReceiptAltIconRegular ref={ref} {...props} />;
  }
}));

ReceiptAltIcon.displayName = 'ReceiptAltIcon';

export { ReceiptAltIcon };

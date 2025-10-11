import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptIcon as ReceiptIconRegular } from './receipt';
import { ReceiptIconBold } from './receipt-bold';
import { ReceiptIconFilled } from './receipt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ReceiptIconRegular ref={ref} {...props} />;
  }
}));

ReceiptIcon.displayName = 'ReceiptIcon';

export { ReceiptIcon };

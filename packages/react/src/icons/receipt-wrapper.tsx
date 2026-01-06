import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptIcon as RegularReceiptIcon } from './receipt';
import { ReceiptIconDuotone as ReceiptIconDuotone } from './receipt-duotone';
import { ReceiptIconBold as ReceiptIconBold } from './receipt-bold';
import { ReceiptIconBoldDuotone as ReceiptIconBoldDuotone } from './receipt-bold-duotone';
import { ReceiptIconFill as ReceiptIconFill } from './receipt-fill';
import { ReceiptIconFillDuotone as ReceiptIconFillDuotone } from './receipt-fill-duotone';

export interface ReceiptIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ReceiptIcon = memo(forwardRef<SVGSVGElement, ReceiptIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReceiptIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ReceiptIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ReceiptIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ReceiptIconFill ref={ref} {...props} />;
  if (duotone) return <ReceiptIconDuotone ref={ref} {...props} />;
  return <RegularReceiptIcon ref={ref} {...props} />;
}));

ReceiptIcon.displayName = 'ReceiptIcon';

export { ReceiptIcon };

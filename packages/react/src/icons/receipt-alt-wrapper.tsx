import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptAltIcon as RegularReceiptAltIcon } from './receipt-alt';
import { ReceiptAltIconDuotone as ReceiptAltIconDuotone } from './receipt-alt-duotone';
import { ReceiptAltIconBold as ReceiptAltIconBold } from './receipt-alt-bold';
import { ReceiptAltIconBoldDuotone as ReceiptAltIconBoldDuotone } from './receipt-alt-bold-duotone';
import { ReceiptAltIconFill as ReceiptAltIconFill } from './receipt-alt-fill';
import { ReceiptAltIconFillDuotone as ReceiptAltIconFillDuotone } from './receipt-alt-fill-duotone';

export interface ReceiptAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ReceiptAltIcon = memo(forwardRef<SVGSVGElement, ReceiptAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReceiptAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ReceiptAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ReceiptAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ReceiptAltIconFill ref={ref} {...props} />;
  if (duotone) return <ReceiptAltIconDuotone ref={ref} {...props} />;
  return <RegularReceiptAltIcon ref={ref} {...props} />;
}));

ReceiptAltIcon.displayName = 'ReceiptAltIcon';

export { ReceiptAltIcon };

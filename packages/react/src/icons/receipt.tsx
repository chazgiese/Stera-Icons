import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptRegular } from './ReceiptRegular';
import { ReceiptRegularDuotone } from './ReceiptRegularDuotone';
import { ReceiptBold } from './ReceiptBold';
import { ReceiptBoldDuotone } from './ReceiptBoldDuotone';
import { ReceiptFill } from './ReceiptFill';
import { ReceiptFillDuotone } from './ReceiptFillDuotone';

export interface ReceiptProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Receipt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ReceiptRegular } from 'stera-icons/ReceiptRegular';
 */
const Receipt = memo(forwardRef<SVGSVGElement, ReceiptProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReceiptBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ReceiptBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ReceiptFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ReceiptFill ref={ref} {...rest} />;
  if (duotone) return <ReceiptRegularDuotone ref={ref} {...rest} />;
  return <ReceiptRegular ref={ref} {...rest} />;
}));

Receipt.displayName = 'Receipt';

export { Receipt };

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
 * Receipt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ReceiptRegular } from 'stera-icons/icons/ReceiptRegular';
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

// Triple export pattern (lucide-react style)
export { Receipt, Receipt as ReceiptIcon, Receipt as SiReceipt };

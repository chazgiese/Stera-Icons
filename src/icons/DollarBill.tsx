import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DollarBillRegular } from './DollarBillRegular.js';
import { DollarBillRegularDuotone } from './DollarBillRegularDuotone.js';
import { DollarBillBold } from './DollarBillBold.js';
import { DollarBillBoldDuotone } from './DollarBillBoldDuotone.js';
import { DollarBillFill } from './DollarBillFill.js';
import { DollarBillFillDuotone } from './DollarBillFillDuotone.js';

export interface DollarBillProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DollarBill - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DollarBillRegular } from 'stera-icons/icons/DollarBillRegular';
 */
const DollarBill = memo(forwardRef<SVGSVGElement, DollarBillProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DollarBillBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DollarBillBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DollarBillFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DollarBillFill ref={ref} {...rest} />;
  if (duotone) return <DollarBillRegularDuotone ref={ref} {...rest} />;
  return <DollarBillRegular ref={ref} {...rest} />;
}));

DollarBill.displayName = 'DollarBill';

// Triple export pattern (lucide-react style)
export { DollarBill, DollarBill as DollarBillIcon, DollarBill as SiDollarBill };
export default DollarBill;

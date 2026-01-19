import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DollarBillRegular } from './DollarBillRegular';
import { DollarBillRegularDuotone } from './DollarBillRegularDuotone';
import { DollarBillBold } from './DollarBillBold';
import { DollarBillBoldDuotone } from './DollarBillBoldDuotone';
import { DollarBillFill } from './DollarBillFill';
import { DollarBillFillDuotone } from './DollarBillFillDuotone';

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

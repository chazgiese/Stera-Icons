import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ReceiptAltRegular } from './ReceiptAltRegular';
import { ReceiptAltRegularDuotone } from './ReceiptAltRegularDuotone';
import { ReceiptAltBold } from './ReceiptAltBold';
import { ReceiptAltBoldDuotone } from './ReceiptAltBoldDuotone';
import { ReceiptAltFill } from './ReceiptAltFill';
import { ReceiptAltFillDuotone } from './ReceiptAltFillDuotone';

export interface ReceiptAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ReceiptAlt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ReceiptAltRegular } from 'stera-icons/ReceiptAltRegular';
 */
const ReceiptAlt = memo(forwardRef<SVGSVGElement, ReceiptAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ReceiptAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ReceiptAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ReceiptAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ReceiptAltFill ref={ref} {...rest} />;
  if (duotone) return <ReceiptAltRegularDuotone ref={ref} {...rest} />;
  return <ReceiptAltRegular ref={ref} {...rest} />;
}));

ReceiptAlt.displayName = 'ReceiptAlt';

export { ReceiptAlt };

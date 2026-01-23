import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ReceiptAltRegular } from './ReceiptAltRegular.js';
import { ReceiptAltRegularDuotone } from './ReceiptAltRegularDuotone.js';
import { ReceiptAltBold } from './ReceiptAltBold.js';
import { ReceiptAltBoldDuotone } from './ReceiptAltBoldDuotone.js';
import { ReceiptAltFill } from './ReceiptAltFill.js';
import { ReceiptAltFillDuotone } from './ReceiptAltFillDuotone.js';

export interface ReceiptAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ReceiptAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ReceiptAltRegular } from 'stera-icons/icons/ReceiptAltRegular';
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

// Triple export pattern (lucide-react style)
export { ReceiptAlt, ReceiptAlt as ReceiptAltIcon, ReceiptAlt as SiReceiptAlt };
export default ReceiptAlt;

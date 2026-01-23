import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PawPrintRegular } from './PawPrintRegular.js';
import { PawPrintRegularDuotone } from './PawPrintRegularDuotone.js';
import { PawPrintBold } from './PawPrintBold.js';
import { PawPrintBoldDuotone } from './PawPrintBoldDuotone.js';
import { PawPrintFill } from './PawPrintFill.js';
import { PawPrintFillDuotone } from './PawPrintFillDuotone.js';

export interface PawPrintProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PawPrint - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PawPrintRegular } from 'stera-icons/icons/PawPrintRegular';
 */
const PawPrint = memo(forwardRef<SVGSVGElement, PawPrintProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PawPrintBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PawPrintBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PawPrintFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PawPrintFill ref={ref} {...rest} />;
  if (duotone) return <PawPrintRegularDuotone ref={ref} {...rest} />;
  return <PawPrintRegular ref={ref} {...rest} />;
}));

PawPrint.displayName = 'PawPrint';

// Triple export pattern (lucide-react style)
export { PawPrint, PawPrint as PawPrintIcon, PawPrint as SiPawPrint };
export default PawPrint;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanRegular } from './ScanRegular.js';
import { ScanRegularDuotone } from './ScanRegularDuotone.js';
import { ScanBold } from './ScanBold.js';
import { ScanBoldDuotone } from './ScanBoldDuotone.js';
import { ScanFill } from './ScanFill.js';
import { ScanFillDuotone } from './ScanFillDuotone.js';

export interface ScanProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scan - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanRegular } from 'stera-icons/icons/ScanRegular';
 */
const Scan = memo(forwardRef<SVGSVGElement, ScanProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanFill ref={ref} {...rest} />;
  if (duotone) return <ScanRegularDuotone ref={ref} {...rest} />;
  return <ScanRegular ref={ref} {...rest} />;
}));

Scan.displayName = 'Scan';

// Triple export pattern (lucide-react style)
export { Scan, Scan as ScanIcon, Scan as SiScan };
export default Scan;

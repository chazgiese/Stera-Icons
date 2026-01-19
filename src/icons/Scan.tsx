import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanRegular } from './ScanRegular';
import { ScanRegularDuotone } from './ScanRegularDuotone';
import { ScanBold } from './ScanBold';
import { ScanBoldDuotone } from './ScanBoldDuotone';
import { ScanFill } from './ScanFill';
import { ScanFillDuotone } from './ScanFillDuotone';

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

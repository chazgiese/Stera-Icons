import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanPlusRegular } from './ScanPlusRegular.js';
import { ScanPlusRegularDuotone } from './ScanPlusRegularDuotone.js';
import { ScanPlusBold } from './ScanPlusBold.js';
import { ScanPlusBoldDuotone } from './ScanPlusBoldDuotone.js';
import { ScanPlusFill } from './ScanPlusFill.js';
import { ScanPlusFillDuotone } from './ScanPlusFillDuotone.js';

export interface ScanPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanPlusRegular } from 'stera-icons/icons/ScanPlusRegular';
 */
const ScanPlus = memo(forwardRef<SVGSVGElement, ScanPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanPlusFill ref={ref} {...rest} />;
  if (duotone) return <ScanPlusRegularDuotone ref={ref} {...rest} />;
  return <ScanPlusRegular ref={ref} {...rest} />;
}));

ScanPlus.displayName = 'ScanPlus';

// Triple export pattern (lucide-react style)
export { ScanPlus, ScanPlus as ScanPlusIcon, ScanPlus as SiScanPlus };
export default ScanPlus;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScanSearchRegular } from './ScanSearchRegular.js';
import { ScanSearchRegularDuotone } from './ScanSearchRegularDuotone.js';
import { ScanSearchBold } from './ScanSearchBold.js';
import { ScanSearchBoldDuotone } from './ScanSearchBoldDuotone.js';
import { ScanSearchFill } from './ScanSearchFill.js';
import { ScanSearchFillDuotone } from './ScanSearchFillDuotone.js';

export interface ScanSearchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanSearch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanSearchRegular } from 'stera-icons/icons/ScanSearchRegular';
 */
const ScanSearch = memo(forwardRef<SVGSVGElement, ScanSearchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanSearchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanSearchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanSearchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanSearchFill ref={ref} {...rest} />;
  if (duotone) return <ScanSearchRegularDuotone ref={ref} {...rest} />;
  return <ScanSearchRegular ref={ref} {...rest} />;
}));

ScanSearch.displayName = 'ScanSearch';

// Triple export pattern (lucide-react style)
export { ScanSearch, ScanSearch as ScanSearchIcon, ScanSearch as SiScanSearch };
export default ScanSearch;

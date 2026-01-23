import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronsLeftRegular } from './ChevronsLeftRegular.js';
import { ChevronsLeftRegularDuotone } from './ChevronsLeftRegularDuotone.js';
import { ChevronsLeftBold } from './ChevronsLeftBold.js';
import { ChevronsLeftBoldDuotone } from './ChevronsLeftBoldDuotone.js';
import { ChevronsLeftFill } from './ChevronsLeftFill.js';
import { ChevronsLeftFillDuotone } from './ChevronsLeftFillDuotone.js';

export interface ChevronsLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsLeftRegular } from 'stera-icons/icons/ChevronsLeftRegular';
 */
const ChevronsLeft = memo(forwardRef<SVGSVGElement, ChevronsLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronsLeftRegular ref={ref} {...rest} />;
}));

ChevronsLeft.displayName = 'ChevronsLeft';

// Triple export pattern (lucide-react style)
export { ChevronsLeft, ChevronsLeft as ChevronsLeftIcon, ChevronsLeft as SiChevronsLeft };
export default ChevronsLeft;

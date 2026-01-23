import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronsLeftRightEllipsisRegular } from './ChevronsLeftRightEllipsisRegular.js';
import { ChevronsLeftRightEllipsisRegularDuotone } from './ChevronsLeftRightEllipsisRegularDuotone.js';
import { ChevronsLeftRightEllipsisBold } from './ChevronsLeftRightEllipsisBold.js';
import { ChevronsLeftRightEllipsisBoldDuotone } from './ChevronsLeftRightEllipsisBoldDuotone.js';
import { ChevronsLeftRightEllipsisFill } from './ChevronsLeftRightEllipsisFill.js';
import { ChevronsLeftRightEllipsisFillDuotone } from './ChevronsLeftRightEllipsisFillDuotone.js';

export interface ChevronsLeftRightEllipsisProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsLeftRightEllipsis - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsLeftRightEllipsisRegular } from 'stera-icons/icons/ChevronsLeftRightEllipsisRegular';
 */
const ChevronsLeftRightEllipsis = memo(forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsLeftRightEllipsisBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsLeftRightEllipsisBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsLeftRightEllipsisFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsLeftRightEllipsisFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsLeftRightEllipsisRegularDuotone ref={ref} {...rest} />;
  return <ChevronsLeftRightEllipsisRegular ref={ref} {...rest} />;
}));

ChevronsLeftRightEllipsis.displayName = 'ChevronsLeftRightEllipsis';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsis, ChevronsLeftRightEllipsis as ChevronsLeftRightEllipsisIcon, ChevronsLeftRightEllipsis as SiChevronsLeftRightEllipsis };
export default ChevronsLeftRightEllipsis;

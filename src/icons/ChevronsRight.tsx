import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronsRightRegular } from './ChevronsRightRegular.js';
import { ChevronsRightRegularDuotone } from './ChevronsRightRegularDuotone.js';
import { ChevronsRightBold } from './ChevronsRightBold.js';
import { ChevronsRightBoldDuotone } from './ChevronsRightBoldDuotone.js';
import { ChevronsRightFill } from './ChevronsRightFill.js';
import { ChevronsRightFillDuotone } from './ChevronsRightFillDuotone.js';

export interface ChevronsRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsRightRegular } from 'stera-icons/icons/ChevronsRightRegular';
 */
const ChevronsRight = memo(forwardRef<SVGSVGElement, ChevronsRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronsRightRegular ref={ref} {...rest} />;
}));

ChevronsRight.displayName = 'ChevronsRight';

// Triple export pattern (lucide-react style)
export { ChevronsRight, ChevronsRight as ChevronsRightIcon, ChevronsRight as SiChevronsRight };
export default ChevronsRight;

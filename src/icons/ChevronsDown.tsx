import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsDownRegular } from './ChevronsDownRegular';
import { ChevronsDownRegularDuotone } from './ChevronsDownRegularDuotone';
import { ChevronsDownBold } from './ChevronsDownBold';
import { ChevronsDownBoldDuotone } from './ChevronsDownBoldDuotone';
import { ChevronsDownFill } from './ChevronsDownFill';
import { ChevronsDownFillDuotone } from './ChevronsDownFillDuotone';

export interface ChevronsDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsDownRegular } from 'stera-icons/icons/ChevronsDownRegular';
 */
const ChevronsDown = memo(forwardRef<SVGSVGElement, ChevronsDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronsDownRegular ref={ref} {...rest} />;
}));

ChevronsDown.displayName = 'ChevronsDown';

// Triple export pattern (lucide-react style)
export { ChevronsDown, ChevronsDown as ChevronsDownIcon, ChevronsDown as SiChevronsDown };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronsUpRegular } from './ChevronsUpRegular.js';
import { ChevronsUpRegularDuotone } from './ChevronsUpRegularDuotone.js';
import { ChevronsUpBold } from './ChevronsUpBold.js';
import { ChevronsUpBoldDuotone } from './ChevronsUpBoldDuotone.js';
import { ChevronsUpFill } from './ChevronsUpFill.js';
import { ChevronsUpFillDuotone } from './ChevronsUpFillDuotone.js';

export interface ChevronsUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronsUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronsUpRegular } from 'stera-icons/icons/ChevronsUpRegular';
 */
const ChevronsUp = memo(forwardRef<SVGSVGElement, ChevronsUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronsUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronsUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronsUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronsUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronsUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronsUpRegular ref={ref} {...rest} />;
}));

ChevronsUp.displayName = 'ChevronsUp';

// Triple export pattern (lucide-react style)
export { ChevronsUp, ChevronsUp as ChevronsUpIcon, ChevronsUp as SiChevronsUp };
export default ChevronsUp;

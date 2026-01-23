import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChevronFullUpRegular } from './ChevronFullUpRegular.js';
import { ChevronFullUpRegularDuotone } from './ChevronFullUpRegularDuotone.js';
import { ChevronFullUpBold } from './ChevronFullUpBold.js';
import { ChevronFullUpBoldDuotone } from './ChevronFullUpBoldDuotone.js';
import { ChevronFullUpFill } from './ChevronFullUpFill.js';
import { ChevronFullUpFillDuotone } from './ChevronFullUpFillDuotone.js';

export interface ChevronFullUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullUpRegular } from 'stera-icons/icons/ChevronFullUpRegular';
 */
const ChevronFullUp = memo(forwardRef<SVGSVGElement, ChevronFullUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullUpFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullUpRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullUpRegular ref={ref} {...rest} />;
}));

ChevronFullUp.displayName = 'ChevronFullUp';

// Triple export pattern (lucide-react style)
export { ChevronFullUp, ChevronFullUp as ChevronFullUpIcon, ChevronFullUp as SiChevronFullUp };
export default ChevronFullUp;

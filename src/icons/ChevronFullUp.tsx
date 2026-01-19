import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullUpRegular } from './ChevronFullUpRegular';
import { ChevronFullUpRegularDuotone } from './ChevronFullUpRegularDuotone';
import { ChevronFullUpBold } from './ChevronFullUpBold';
import { ChevronFullUpBoldDuotone } from './ChevronFullUpBoldDuotone';
import { ChevronFullUpFill } from './ChevronFullUpFill';
import { ChevronFullUpFillDuotone } from './ChevronFullUpFillDuotone';

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

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullOutwardRegular } from './ChevronFullOutwardRegular';
import { ChevronFullOutwardRegularDuotone } from './ChevronFullOutwardRegularDuotone';
import { ChevronFullOutwardBold } from './ChevronFullOutwardBold';
import { ChevronFullOutwardBoldDuotone } from './ChevronFullOutwardBoldDuotone';
import { ChevronFullOutwardFill } from './ChevronFullOutwardFill';
import { ChevronFullOutwardFillDuotone } from './ChevronFullOutwardFillDuotone';

export interface ChevronFullOutwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullOutward - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullOutwardRegular } from 'stera-icons/ChevronFullOutwardRegular';
 */
const ChevronFullOutward = memo(forwardRef<SVGSVGElement, ChevronFullOutwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullOutwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullOutwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullOutwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullOutwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullOutwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullOutwardRegular ref={ref} {...rest} />;
}));

ChevronFullOutward.displayName = 'ChevronFullOutward';

// Triple export pattern (lucide-react style)
export { ChevronFullOutward, ChevronFullOutward as ChevronFullOutwardIcon, ChevronFullOutward as SiChevronFullOutward };

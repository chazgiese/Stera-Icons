import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronOutwardRegular } from './ChevronOutwardRegular';
import { ChevronOutwardRegularDuotone } from './ChevronOutwardRegularDuotone';
import { ChevronOutwardBold } from './ChevronOutwardBold';
import { ChevronOutwardBoldDuotone } from './ChevronOutwardBoldDuotone';
import { ChevronOutwardFill } from './ChevronOutwardFill';
import { ChevronOutwardFillDuotone } from './ChevronOutwardFillDuotone';

export interface ChevronOutwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronOutward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronOutwardRegular } from 'stera-icons/ChevronOutwardRegular';
 */
const ChevronOutward = memo(forwardRef<SVGSVGElement, ChevronOutwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronOutwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronOutwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronOutwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronOutwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronOutwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronOutwardRegular ref={ref} {...rest} />;
}));

ChevronOutward.displayName = 'ChevronOutward';

export { ChevronOutward };

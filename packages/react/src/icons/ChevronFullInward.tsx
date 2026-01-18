import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullInwardRegular } from './ChevronFullInwardRegular';
import { ChevronFullInwardRegularDuotone } from './ChevronFullInwardRegularDuotone';
import { ChevronFullInwardBold } from './ChevronFullInwardBold';
import { ChevronFullInwardBoldDuotone } from './ChevronFullInwardBoldDuotone';
import { ChevronFullInwardFill } from './ChevronFullInwardFill';
import { ChevronFullInwardFillDuotone } from './ChevronFullInwardFillDuotone';

export interface ChevronFullInwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullInward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullInwardRegular } from 'stera-icons/ChevronFullInwardRegular';
 */
const ChevronFullInward = memo(forwardRef<SVGSVGElement, ChevronFullInwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullInwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullInwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullInwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullInwardFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullInwardRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullInwardRegular ref={ref} {...rest} />;
}));

ChevronFullInward.displayName = 'ChevronFullInward';

export { ChevronFullInward };

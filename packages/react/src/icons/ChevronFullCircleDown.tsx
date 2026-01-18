import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleDownRegular } from './ChevronFullCircleDownRegular';
import { ChevronFullCircleDownRegularDuotone } from './ChevronFullCircleDownRegularDuotone';
import { ChevronFullCircleDownBold } from './ChevronFullCircleDownBold';
import { ChevronFullCircleDownBoldDuotone } from './ChevronFullCircleDownBoldDuotone';
import { ChevronFullCircleDownFill } from './ChevronFullCircleDownFill';
import { ChevronFullCircleDownFillDuotone } from './ChevronFullCircleDownFillDuotone';

export interface ChevronFullCircleDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleDownRegular } from 'stera-icons/ChevronFullCircleDownRegular';
 */
const ChevronFullCircleDown = memo(forwardRef<SVGSVGElement, ChevronFullCircleDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleDownFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleDownRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleDownRegular ref={ref} {...rest} />;
}));

ChevronFullCircleDown.displayName = 'ChevronFullCircleDown';

export { ChevronFullCircleDown };

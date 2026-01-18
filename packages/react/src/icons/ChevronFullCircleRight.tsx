import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleRightRegular } from './ChevronFullCircleRightRegular';
import { ChevronFullCircleRightRegularDuotone } from './ChevronFullCircleRightRegularDuotone';
import { ChevronFullCircleRightBold } from './ChevronFullCircleRightBold';
import { ChevronFullCircleRightBoldDuotone } from './ChevronFullCircleRightBoldDuotone';
import { ChevronFullCircleRightFill } from './ChevronFullCircleRightFill';
import { ChevronFullCircleRightFillDuotone } from './ChevronFullCircleRightFillDuotone';

export interface ChevronFullCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleRightRegular } from 'stera-icons/ChevronFullCircleRightRegular';
 */
const ChevronFullCircleRight = memo(forwardRef<SVGSVGElement, ChevronFullCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleRightRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleRightRegular ref={ref} {...rest} />;
}));

ChevronFullCircleRight.displayName = 'ChevronFullCircleRight';

export { ChevronFullCircleRight };

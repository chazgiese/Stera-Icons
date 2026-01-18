import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronFullCircleLeftRegular } from './ChevronFullCircleLeftRegular';
import { ChevronFullCircleLeftRegularDuotone } from './ChevronFullCircleLeftRegularDuotone';
import { ChevronFullCircleLeftBold } from './ChevronFullCircleLeftBold';
import { ChevronFullCircleLeftBoldDuotone } from './ChevronFullCircleLeftBoldDuotone';
import { ChevronFullCircleLeftFill } from './ChevronFullCircleLeftFill';
import { ChevronFullCircleLeftFillDuotone } from './ChevronFullCircleLeftFillDuotone';

export interface ChevronFullCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChevronFullCircleLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChevronFullCircleLeftRegular } from 'stera-icons/ChevronFullCircleLeftRegular';
 */
const ChevronFullCircleLeft = memo(forwardRef<SVGSVGElement, ChevronFullCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronFullCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChevronFullCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChevronFullCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChevronFullCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <ChevronFullCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <ChevronFullCircleLeftRegular ref={ref} {...rest} />;
}));

ChevronFullCircleLeft.displayName = 'ChevronFullCircleLeft';

export { ChevronFullCircleLeft };

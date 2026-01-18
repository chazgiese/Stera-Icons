import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDashRegular } from './CircleDashRegular';
import { CircleDashRegularDuotone } from './CircleDashRegularDuotone';
import { CircleDashBold } from './CircleDashBold';
import { CircleDashBoldDuotone } from './CircleDashBoldDuotone';
import { CircleDashFill } from './CircleDashFill';
import { CircleDashFillDuotone } from './CircleDashFillDuotone';

export interface CircleDashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDash with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDashRegular } from 'stera-icons/CircleDashRegular';
 */
const CircleDash = memo(forwardRef<SVGSVGElement, CircleDashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDashFill ref={ref} {...rest} />;
  if (duotone) return <CircleDashRegularDuotone ref={ref} {...rest} />;
  return <CircleDashRegular ref={ref} {...rest} />;
}));

CircleDash.displayName = 'CircleDash';

export { CircleDash };

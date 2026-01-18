import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineDescRegular } from './ChartLineDescRegular';
import { ChartLineDescRegularDuotone } from './ChartLineDescRegularDuotone';
import { ChartLineDescBold } from './ChartLineDescBold';
import { ChartLineDescBoldDuotone } from './ChartLineDescBoldDuotone';
import { ChartLineDescFill } from './ChartLineDescFill';
import { ChartLineDescFillDuotone } from './ChartLineDescFillDuotone';

export interface ChartLineDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineDesc with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineDescRegular } from 'stera-icons/ChartLineDescRegular';
 */
const ChartLineDesc = memo(forwardRef<SVGSVGElement, ChartLineDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineDescRegularDuotone ref={ref} {...rest} />;
  return <ChartLineDescRegular ref={ref} {...rest} />;
}));

ChartLineDesc.displayName = 'ChartLineDesc';

export { ChartLineDesc };

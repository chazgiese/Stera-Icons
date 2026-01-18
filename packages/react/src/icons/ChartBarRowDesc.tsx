import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowDescRegular } from './ChartBarRowDescRegular';
import { ChartBarRowDescRegularDuotone } from './ChartBarRowDescRegularDuotone';
import { ChartBarRowDescBold } from './ChartBarRowDescBold';
import { ChartBarRowDescBoldDuotone } from './ChartBarRowDescBoldDuotone';
import { ChartBarRowDescFill } from './ChartBarRowDescFill';
import { ChartBarRowDescFillDuotone } from './ChartBarRowDescFillDuotone';

export interface ChartBarRowDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarRowDesc with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarRowDescRegular } from 'stera-icons/ChartBarRowDescRegular';
 */
const ChartBarRowDesc = memo(forwardRef<SVGSVGElement, ChartBarRowDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarRowDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarRowDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarRowDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarRowDescRegularDuotone ref={ref} {...rest} />;
  return <ChartBarRowDescRegular ref={ref} {...rest} />;
}));

ChartBarRowDesc.displayName = 'ChartBarRowDesc';

export { ChartBarRowDesc };

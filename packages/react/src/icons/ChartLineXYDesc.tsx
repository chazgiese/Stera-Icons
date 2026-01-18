import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineXYDescRegular } from './ChartLineXYDescRegular';
import { ChartLineXYDescRegularDuotone } from './ChartLineXYDescRegularDuotone';
import { ChartLineXYDescBold } from './ChartLineXYDescBold';
import { ChartLineXYDescBoldDuotone } from './ChartLineXYDescBoldDuotone';
import { ChartLineXYDescFill } from './ChartLineXYDescFill';
import { ChartLineXYDescFillDuotone } from './ChartLineXYDescFillDuotone';

export interface ChartLineXYDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineXYDesc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineXYDescRegular } from 'stera-icons/ChartLineXYDescRegular';
 */
const ChartLineXYDesc = memo(forwardRef<SVGSVGElement, ChartLineXYDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineXYDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineXYDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineXYDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineXYDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineXYDescRegularDuotone ref={ref} {...rest} />;
  return <ChartLineXYDescRegular ref={ref} {...rest} />;
}));

ChartLineXYDesc.displayName = 'ChartLineXYDesc';

// Triple export pattern (lucide-react style)
export { ChartLineXYDesc, ChartLineXYDesc as ChartLineXYDescIcon, ChartLineXYDesc as SiChartLineXYDesc };

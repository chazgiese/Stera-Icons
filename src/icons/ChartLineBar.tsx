import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineBarRegular } from './ChartLineBarRegular';
import { ChartLineBarRegularDuotone } from './ChartLineBarRegularDuotone';
import { ChartLineBarBold } from './ChartLineBarBold';
import { ChartLineBarBoldDuotone } from './ChartLineBarBoldDuotone';
import { ChartLineBarFill } from './ChartLineBarFill';
import { ChartLineBarFillDuotone } from './ChartLineBarFillDuotone';

export interface ChartLineBarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineBar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineBarRegular } from 'stera-icons/icons/ChartLineBarRegular';
 */
const ChartLineBar = memo(forwardRef<SVGSVGElement, ChartLineBarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineBarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineBarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineBarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineBarFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineBarRegularDuotone ref={ref} {...rest} />;
  return <ChartLineBarRegular ref={ref} {...rest} />;
}));

ChartLineBar.displayName = 'ChartLineBar';

// Triple export pattern (lucide-react style)
export { ChartLineBar, ChartLineBar as ChartLineBarIcon, ChartLineBar as SiChartLineBar };
export default ChartLineBar;

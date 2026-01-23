import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartDonutRegular } from './ChartDonutRegular.js';
import { ChartDonutRegularDuotone } from './ChartDonutRegularDuotone.js';
import { ChartDonutBold } from './ChartDonutBold.js';
import { ChartDonutBoldDuotone } from './ChartDonutBoldDuotone.js';
import { ChartDonutFill } from './ChartDonutFill.js';
import { ChartDonutFillDuotone } from './ChartDonutFillDuotone.js';

export interface ChartDonutProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartDonut - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartDonutRegular } from 'stera-icons/icons/ChartDonutRegular';
 */
const ChartDonut = memo(forwardRef<SVGSVGElement, ChartDonutProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartDonutBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartDonutBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartDonutFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartDonutFill ref={ref} {...rest} />;
  if (duotone) return <ChartDonutRegularDuotone ref={ref} {...rest} />;
  return <ChartDonutRegular ref={ref} {...rest} />;
}));

ChartDonut.displayName = 'ChartDonut';

// Triple export pattern (lucide-react style)
export { ChartDonut, ChartDonut as ChartDonutIcon, ChartDonut as SiChartDonut };
export default ChartDonut;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartWaterfallRegular } from './ChartWaterfallRegular.js';
import { ChartWaterfallRegularDuotone } from './ChartWaterfallRegularDuotone.js';
import { ChartWaterfallBold } from './ChartWaterfallBold.js';
import { ChartWaterfallBoldDuotone } from './ChartWaterfallBoldDuotone.js';
import { ChartWaterfallFill } from './ChartWaterfallFill.js';
import { ChartWaterfallFillDuotone } from './ChartWaterfallFillDuotone.js';

export interface ChartWaterfallProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartWaterfall - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartWaterfallRegular } from 'stera-icons/icons/ChartWaterfallRegular';
 */
const ChartWaterfall = memo(forwardRef<SVGSVGElement, ChartWaterfallProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartWaterfallBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartWaterfallFill ref={ref} {...rest} />;
  if (duotone) return <ChartWaterfallRegularDuotone ref={ref} {...rest} />;
  return <ChartWaterfallRegular ref={ref} {...rest} />;
}));

ChartWaterfall.displayName = 'ChartWaterfall';

// Triple export pattern (lucide-react style)
export { ChartWaterfall, ChartWaterfall as ChartWaterfallIcon, ChartWaterfall as SiChartWaterfall };
export default ChartWaterfall;

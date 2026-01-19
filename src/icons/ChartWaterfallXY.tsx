import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallXYRegular } from './ChartWaterfallXYRegular';
import { ChartWaterfallXYRegularDuotone } from './ChartWaterfallXYRegularDuotone';
import { ChartWaterfallXYBold } from './ChartWaterfallXYBold';
import { ChartWaterfallXYBoldDuotone } from './ChartWaterfallXYBoldDuotone';
import { ChartWaterfallXYFill } from './ChartWaterfallXYFill';
import { ChartWaterfallXYFillDuotone } from './ChartWaterfallXYFillDuotone';

export interface ChartWaterfallXYProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartWaterfallXY - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartWaterfallXYRegular } from 'stera-icons/icons/ChartWaterfallXYRegular';
 */
const ChartWaterfallXY = memo(forwardRef<SVGSVGElement, ChartWaterfallXYProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallXYBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartWaterfallXYBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallXYFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartWaterfallXYFill ref={ref} {...rest} />;
  if (duotone) return <ChartWaterfallXYRegularDuotone ref={ref} {...rest} />;
  return <ChartWaterfallXYRegular ref={ref} {...rest} />;
}));

ChartWaterfallXY.displayName = 'ChartWaterfallXY';

// Triple export pattern (lucide-react style)
export { ChartWaterfallXY, ChartWaterfallXY as ChartWaterfallXYIcon, ChartWaterfallXY as SiChartWaterfallXY };

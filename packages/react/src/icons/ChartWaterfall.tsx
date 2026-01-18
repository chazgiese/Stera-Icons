import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallRegular } from './ChartWaterfallRegular';
import { ChartWaterfallRegularDuotone } from './ChartWaterfallRegularDuotone';
import { ChartWaterfallBold } from './ChartWaterfallBold';
import { ChartWaterfallBoldDuotone } from './ChartWaterfallBoldDuotone';
import { ChartWaterfallFill } from './ChartWaterfallFill';
import { ChartWaterfallFillDuotone } from './ChartWaterfallFillDuotone';

export interface ChartWaterfallProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartWaterfall with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartWaterfallRegular } from 'stera-icons/ChartWaterfallRegular';
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

export { ChartWaterfall };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartWaterfallXRegular } from './ChartWaterfallXRegular';
import { ChartWaterfallXRegularDuotone } from './ChartWaterfallXRegularDuotone';
import { ChartWaterfallXBold } from './ChartWaterfallXBold';
import { ChartWaterfallXBoldDuotone } from './ChartWaterfallXBoldDuotone';
import { ChartWaterfallXFill } from './ChartWaterfallXFill';
import { ChartWaterfallXFillDuotone } from './ChartWaterfallXFillDuotone';

export interface ChartWaterfallXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartWaterfallX with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartWaterfallXRegular } from 'stera-icons/ChartWaterfallXRegular';
 */
const ChartWaterfallX = memo(forwardRef<SVGSVGElement, ChartWaterfallXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartWaterfallXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartWaterfallXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartWaterfallXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartWaterfallXFill ref={ref} {...rest} />;
  if (duotone) return <ChartWaterfallXRegularDuotone ref={ref} {...rest} />;
  return <ChartWaterfallXRegular ref={ref} {...rest} />;
}));

ChartWaterfallX.displayName = 'ChartWaterfallX';

export { ChartWaterfallX };

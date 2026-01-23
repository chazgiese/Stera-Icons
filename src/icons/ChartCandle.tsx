import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartCandleRegular } from './ChartCandleRegular.js';
import { ChartCandleRegularDuotone } from './ChartCandleRegularDuotone.js';
import { ChartCandleBold } from './ChartCandleBold.js';
import { ChartCandleBoldDuotone } from './ChartCandleBoldDuotone.js';
import { ChartCandleFill } from './ChartCandleFill.js';
import { ChartCandleFillDuotone } from './ChartCandleFillDuotone.js';

export interface ChartCandleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartCandle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartCandleRegular } from 'stera-icons/icons/ChartCandleRegular';
 */
const ChartCandle = memo(forwardRef<SVGSVGElement, ChartCandleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartCandleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartCandleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartCandleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartCandleFill ref={ref} {...rest} />;
  if (duotone) return <ChartCandleRegularDuotone ref={ref} {...rest} />;
  return <ChartCandleRegular ref={ref} {...rest} />;
}));

ChartCandle.displayName = 'ChartCandle';

// Triple export pattern (lucide-react style)
export { ChartCandle, ChartCandle as ChartCandleIcon, ChartCandle as SiChartCandle };
export default ChartCandle;

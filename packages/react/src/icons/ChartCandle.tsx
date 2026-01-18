import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartCandleRegular } from './ChartCandleRegular';
import { ChartCandleRegularDuotone } from './ChartCandleRegularDuotone';
import { ChartCandleBold } from './ChartCandleBold';
import { ChartCandleBoldDuotone } from './ChartCandleBoldDuotone';
import { ChartCandleFill } from './ChartCandleFill';
import { ChartCandleFillDuotone } from './ChartCandleFillDuotone';

export interface ChartCandleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartCandle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartCandleRegular } from 'stera-icons/ChartCandleRegular';
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

export { ChartCandle };

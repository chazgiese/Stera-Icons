import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartPieRegular } from './ChartPieRegular';
import { ChartPieRegularDuotone } from './ChartPieRegularDuotone';
import { ChartPieBold } from './ChartPieBold';
import { ChartPieBoldDuotone } from './ChartPieBoldDuotone';
import { ChartPieFill } from './ChartPieFill';
import { ChartPieFillDuotone } from './ChartPieFillDuotone';

export interface ChartPieProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartPie - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartPieRegular } from 'stera-icons/ChartPieRegular';
 */
const ChartPie = memo(forwardRef<SVGSVGElement, ChartPieProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPieBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartPieBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartPieFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartPieFill ref={ref} {...rest} />;
  if (duotone) return <ChartPieRegularDuotone ref={ref} {...rest} />;
  return <ChartPieRegular ref={ref} {...rest} />;
}));

ChartPie.displayName = 'ChartPie';

// Triple export pattern (lucide-react style)
export { ChartPie, ChartPie as ChartPieIcon, ChartPie as SiChartPie };

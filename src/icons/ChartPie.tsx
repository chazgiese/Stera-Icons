import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartPieRegular } from './ChartPieRegular.js';
import { ChartPieRegularDuotone } from './ChartPieRegularDuotone.js';
import { ChartPieBold } from './ChartPieBold.js';
import { ChartPieBoldDuotone } from './ChartPieBoldDuotone.js';
import { ChartPieFill } from './ChartPieFill.js';
import { ChartPieFillDuotone } from './ChartPieFillDuotone.js';

export interface ChartPieProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartPie - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartPieRegular } from 'stera-icons/icons/ChartPieRegular';
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
export default ChartPie;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartLineRegular } from './ChartLineRegular.js';
import { ChartLineRegularDuotone } from './ChartLineRegularDuotone.js';
import { ChartLineBold } from './ChartLineBold.js';
import { ChartLineBoldDuotone } from './ChartLineBoldDuotone.js';
import { ChartLineFill } from './ChartLineFill.js';
import { ChartLineFillDuotone } from './ChartLineFillDuotone.js';

export interface ChartLineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLine - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineRegular } from 'stera-icons/icons/ChartLineRegular';
 */
const ChartLine = memo(forwardRef<SVGSVGElement, ChartLineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineRegularDuotone ref={ref} {...rest} />;
  return <ChartLineRegular ref={ref} {...rest} />;
}));

ChartLine.displayName = 'ChartLine';

// Triple export pattern (lucide-react style)
export { ChartLine, ChartLine as ChartLineIcon, ChartLine as SiChartLine };
export default ChartLine;

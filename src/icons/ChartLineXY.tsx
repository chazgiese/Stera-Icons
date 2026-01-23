import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartLineXYRegular } from './ChartLineXYRegular.js';
import { ChartLineXYRegularDuotone } from './ChartLineXYRegularDuotone.js';
import { ChartLineXYBold } from './ChartLineXYBold.js';
import { ChartLineXYBoldDuotone } from './ChartLineXYBoldDuotone.js';
import { ChartLineXYFill } from './ChartLineXYFill.js';
import { ChartLineXYFillDuotone } from './ChartLineXYFillDuotone.js';

export interface ChartLineXYProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineXY - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineXYRegular } from 'stera-icons/icons/ChartLineXYRegular';
 */
const ChartLineXY = memo(forwardRef<SVGSVGElement, ChartLineXYProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineXYBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineXYBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineXYFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineXYFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineXYRegularDuotone ref={ref} {...rest} />;
  return <ChartLineXYRegular ref={ref} {...rest} />;
}));

ChartLineXY.displayName = 'ChartLineXY';

// Triple export pattern (lucide-react style)
export { ChartLineXY, ChartLineXY as ChartLineXYIcon, ChartLineXY as SiChartLineXY };
export default ChartLineXY;

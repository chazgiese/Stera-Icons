import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarXYRegular } from './ChartBarXYRegular.js';
import { ChartBarXYRegularDuotone } from './ChartBarXYRegularDuotone.js';
import { ChartBarXYBold } from './ChartBarXYBold.js';
import { ChartBarXYBoldDuotone } from './ChartBarXYBoldDuotone.js';
import { ChartBarXYFill } from './ChartBarXYFill.js';
import { ChartBarXYFillDuotone } from './ChartBarXYFillDuotone.js';

export interface ChartBarXYProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarXY - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarXYRegular } from 'stera-icons/icons/ChartBarXYRegular';
 */
const ChartBarXY = memo(forwardRef<SVGSVGElement, ChartBarXYProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarXYBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarXYBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarXYFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarXYFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarXYRegularDuotone ref={ref} {...rest} />;
  return <ChartBarXYRegular ref={ref} {...rest} />;
}));

ChartBarXY.displayName = 'ChartBarXY';

// Triple export pattern (lucide-react style)
export { ChartBarXY, ChartBarXY as ChartBarXYIcon, ChartBarXY as SiChartBarXY };
export default ChartBarXY;

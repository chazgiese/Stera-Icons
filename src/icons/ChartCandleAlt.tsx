import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartCandleAltRegular } from './ChartCandleAltRegular.js';
import { ChartCandleAltRegularDuotone } from './ChartCandleAltRegularDuotone.js';
import { ChartCandleAltBold } from './ChartCandleAltBold.js';
import { ChartCandleAltBoldDuotone } from './ChartCandleAltBoldDuotone.js';
import { ChartCandleAltFill } from './ChartCandleAltFill.js';
import { ChartCandleAltFillDuotone } from './ChartCandleAltFillDuotone.js';

export interface ChartCandleAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartCandleAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartCandleAltRegular } from 'stera-icons/icons/ChartCandleAltRegular';
 */
const ChartCandleAlt = memo(forwardRef<SVGSVGElement, ChartCandleAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartCandleAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartCandleAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartCandleAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartCandleAltFill ref={ref} {...rest} />;
  if (duotone) return <ChartCandleAltRegularDuotone ref={ref} {...rest} />;
  return <ChartCandleAltRegular ref={ref} {...rest} />;
}));

ChartCandleAlt.displayName = 'ChartCandleAlt';

// Triple export pattern (lucide-react style)
export { ChartCandleAlt, ChartCandleAlt as ChartCandleAltIcon, ChartCandleAlt as SiChartCandleAlt };
export default ChartCandleAlt;

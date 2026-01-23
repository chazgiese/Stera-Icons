import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartPieAltRegular } from './ChartPieAltRegular.js';
import { ChartPieAltRegularDuotone } from './ChartPieAltRegularDuotone.js';
import { ChartPieAltBold } from './ChartPieAltBold.js';
import { ChartPieAltBoldDuotone } from './ChartPieAltBoldDuotone.js';
import { ChartPieAltFill } from './ChartPieAltFill.js';
import { ChartPieAltFillDuotone } from './ChartPieAltFillDuotone.js';

export interface ChartPieAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartPieAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartPieAltRegular } from 'stera-icons/icons/ChartPieAltRegular';
 */
const ChartPieAlt = memo(forwardRef<SVGSVGElement, ChartPieAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPieAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartPieAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartPieAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartPieAltFill ref={ref} {...rest} />;
  if (duotone) return <ChartPieAltRegularDuotone ref={ref} {...rest} />;
  return <ChartPieAltRegular ref={ref} {...rest} />;
}));

ChartPieAlt.displayName = 'ChartPieAlt';

// Triple export pattern (lucide-react style)
export { ChartPieAlt, ChartPieAlt as ChartPieAltIcon, ChartPieAlt as SiChartPieAlt };
export default ChartPieAlt;

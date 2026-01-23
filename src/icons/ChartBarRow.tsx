import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarRowRegular } from './ChartBarRowRegular.js';
import { ChartBarRowRegularDuotone } from './ChartBarRowRegularDuotone.js';
import { ChartBarRowBold } from './ChartBarRowBold.js';
import { ChartBarRowBoldDuotone } from './ChartBarRowBoldDuotone.js';
import { ChartBarRowFill } from './ChartBarRowFill.js';
import { ChartBarRowFillDuotone } from './ChartBarRowFillDuotone.js';

export interface ChartBarRowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarRow - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarRowRegular } from 'stera-icons/icons/ChartBarRowRegular';
 */
const ChartBarRow = memo(forwardRef<SVGSVGElement, ChartBarRowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarRowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarRowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarRowFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarRowRegularDuotone ref={ref} {...rest} />;
  return <ChartBarRowRegular ref={ref} {...rest} />;
}));

ChartBarRow.displayName = 'ChartBarRow';

// Triple export pattern (lucide-react style)
export { ChartBarRow, ChartBarRow as ChartBarRowIcon, ChartBarRow as SiChartBarRow };
export default ChartBarRow;

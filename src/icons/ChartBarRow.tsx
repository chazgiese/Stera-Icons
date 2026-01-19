import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowRegular } from './ChartBarRowRegular';
import { ChartBarRowRegularDuotone } from './ChartBarRowRegularDuotone';
import { ChartBarRowBold } from './ChartBarRowBold';
import { ChartBarRowBoldDuotone } from './ChartBarRowBoldDuotone';
import { ChartBarRowFill } from './ChartBarRowFill';
import { ChartBarRowFillDuotone } from './ChartBarRowFillDuotone';

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

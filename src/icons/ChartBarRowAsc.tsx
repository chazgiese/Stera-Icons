import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowAscRegular } from './ChartBarRowAscRegular';
import { ChartBarRowAscRegularDuotone } from './ChartBarRowAscRegularDuotone';
import { ChartBarRowAscBold } from './ChartBarRowAscBold';
import { ChartBarRowAscBoldDuotone } from './ChartBarRowAscBoldDuotone';
import { ChartBarRowAscFill } from './ChartBarRowAscFill';
import { ChartBarRowAscFillDuotone } from './ChartBarRowAscFillDuotone';

export interface ChartBarRowAscProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarRowAsc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarRowAscRegular } from 'stera-icons/icons/ChartBarRowAscRegular';
 */
const ChartBarRowAsc = memo(forwardRef<SVGSVGElement, ChartBarRowAscProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowAscBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarRowAscBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarRowAscFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarRowAscFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarRowAscRegularDuotone ref={ref} {...rest} />;
  return <ChartBarRowAscRegular ref={ref} {...rest} />;
}));

ChartBarRowAsc.displayName = 'ChartBarRowAsc';

// Triple export pattern (lucide-react style)
export { ChartBarRowAsc, ChartBarRowAsc as ChartBarRowAscIcon, ChartBarRowAsc as SiChartBarRowAsc };
export default ChartBarRowAsc;

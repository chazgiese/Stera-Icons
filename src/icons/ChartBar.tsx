import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRegular } from './ChartBarRegular';
import { ChartBarRegularDuotone } from './ChartBarRegularDuotone';
import { ChartBarBold } from './ChartBarBold';
import { ChartBarBoldDuotone } from './ChartBarBoldDuotone';
import { ChartBarFill } from './ChartBarFill';
import { ChartBarFillDuotone } from './ChartBarFillDuotone';

export interface ChartBarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBar - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarRegular } from 'stera-icons/icons/ChartBarRegular';
 */
const ChartBar = memo(forwardRef<SVGSVGElement, ChartBarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarRegularDuotone ref={ref} {...rest} />;
  return <ChartBarRegular ref={ref} {...rest} />;
}));

ChartBar.displayName = 'ChartBar';

// Triple export pattern (lucide-react style)
export { ChartBar, ChartBar as ChartBarIcon, ChartBar as SiChartBar };
export default ChartBar;

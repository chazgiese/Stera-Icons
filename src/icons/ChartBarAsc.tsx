import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarAscRegular } from './ChartBarAscRegular.js';
import { ChartBarAscRegularDuotone } from './ChartBarAscRegularDuotone.js';
import { ChartBarAscBold } from './ChartBarAscBold.js';
import { ChartBarAscBoldDuotone } from './ChartBarAscBoldDuotone.js';
import { ChartBarAscFill } from './ChartBarAscFill.js';
import { ChartBarAscFillDuotone } from './ChartBarAscFillDuotone.js';

export interface ChartBarAscProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarAsc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarAscRegular } from 'stera-icons/icons/ChartBarAscRegular';
 */
const ChartBarAsc = memo(forwardRef<SVGSVGElement, ChartBarAscProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarAscBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarAscBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarAscFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarAscFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarAscRegularDuotone ref={ref} {...rest} />;
  return <ChartBarAscRegular ref={ref} {...rest} />;
}));

ChartBarAsc.displayName = 'ChartBarAsc';

// Triple export pattern (lucide-react style)
export { ChartBarAsc, ChartBarAsc as ChartBarAscIcon, ChartBarAsc as SiChartBarAsc };
export default ChartBarAsc;

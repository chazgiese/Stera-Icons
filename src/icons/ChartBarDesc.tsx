import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarDescRegular } from './ChartBarDescRegular.js';
import { ChartBarDescRegularDuotone } from './ChartBarDescRegularDuotone.js';
import { ChartBarDescBold } from './ChartBarDescBold.js';
import { ChartBarDescBoldDuotone } from './ChartBarDescBoldDuotone.js';
import { ChartBarDescFill } from './ChartBarDescFill.js';
import { ChartBarDescFillDuotone } from './ChartBarDescFillDuotone.js';

export interface ChartBarDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarDesc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarDescRegular } from 'stera-icons/icons/ChartBarDescRegular';
 */
const ChartBarDesc = memo(forwardRef<SVGSVGElement, ChartBarDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarDescRegularDuotone ref={ref} {...rest} />;
  return <ChartBarDescRegular ref={ref} {...rest} />;
}));

ChartBarDesc.displayName = 'ChartBarDesc';

// Triple export pattern (lucide-react style)
export { ChartBarDesc, ChartBarDesc as ChartBarDescIcon, ChartBarDesc as SiChartBarDesc };
export default ChartBarDesc;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarDescRegular } from './ChartBarDescRegular';
import { ChartBarDescRegularDuotone } from './ChartBarDescRegularDuotone';
import { ChartBarDescBold } from './ChartBarDescBold';
import { ChartBarDescBoldDuotone } from './ChartBarDescBoldDuotone';
import { ChartBarDescFill } from './ChartBarDescFill';
import { ChartBarDescFillDuotone } from './ChartBarDescFillDuotone';

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

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarRowDescRegular } from './ChartBarRowDescRegular.js';
import { ChartBarRowDescRegularDuotone } from './ChartBarRowDescRegularDuotone.js';
import { ChartBarRowDescBold } from './ChartBarRowDescBold.js';
import { ChartBarRowDescBoldDuotone } from './ChartBarRowDescBoldDuotone.js';
import { ChartBarRowDescFill } from './ChartBarRowDescFill.js';
import { ChartBarRowDescFillDuotone } from './ChartBarRowDescFillDuotone.js';

export interface ChartBarRowDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarRowDesc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarRowDescRegular } from 'stera-icons/icons/ChartBarRowDescRegular';
 */
const ChartBarRowDesc = memo(forwardRef<SVGSVGElement, ChartBarRowDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarRowDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarRowDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarRowDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarRowDescRegularDuotone ref={ref} {...rest} />;
  return <ChartBarRowDescRegular ref={ref} {...rest} />;
}));

ChartBarRowDesc.displayName = 'ChartBarRowDesc';

// Triple export pattern (lucide-react style)
export { ChartBarRowDesc, ChartBarRowDesc as ChartBarRowDescIcon, ChartBarRowDesc as SiChartBarRowDesc };
export default ChartBarRowDesc;

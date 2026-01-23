import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartLineDescRegular } from './ChartLineDescRegular.js';
import { ChartLineDescRegularDuotone } from './ChartLineDescRegularDuotone.js';
import { ChartLineDescBold } from './ChartLineDescBold.js';
import { ChartLineDescBoldDuotone } from './ChartLineDescBoldDuotone.js';
import { ChartLineDescFill } from './ChartLineDescFill.js';
import { ChartLineDescFillDuotone } from './ChartLineDescFillDuotone.js';

export interface ChartLineDescProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineDesc - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineDescRegular } from 'stera-icons/icons/ChartLineDescRegular';
 */
const ChartLineDesc = memo(forwardRef<SVGSVGElement, ChartLineDescProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineDescBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineDescBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineDescFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineDescFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineDescRegularDuotone ref={ref} {...rest} />;
  return <ChartLineDescRegular ref={ref} {...rest} />;
}));

ChartLineDesc.displayName = 'ChartLineDesc';

// Triple export pattern (lucide-react style)
export { ChartLineDesc, ChartLineDesc as ChartLineDescIcon, ChartLineDesc as SiChartLineDesc };
export default ChartLineDesc;

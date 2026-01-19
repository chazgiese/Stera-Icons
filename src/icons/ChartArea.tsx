import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartAreaRegular } from './ChartAreaRegular';
import { ChartAreaRegularDuotone } from './ChartAreaRegularDuotone';
import { ChartAreaBold } from './ChartAreaBold';
import { ChartAreaBoldDuotone } from './ChartAreaBoldDuotone';
import { ChartAreaFill } from './ChartAreaFill';
import { ChartAreaFillDuotone } from './ChartAreaFillDuotone';

export interface ChartAreaProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartArea - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartAreaRegular } from 'stera-icons/icons/ChartAreaRegular';
 */
const ChartArea = memo(forwardRef<SVGSVGElement, ChartAreaProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartAreaBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartAreaBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartAreaFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartAreaFill ref={ref} {...rest} />;
  if (duotone) return <ChartAreaRegularDuotone ref={ref} {...rest} />;
  return <ChartAreaRegular ref={ref} {...rest} />;
}));

ChartArea.displayName = 'ChartArea';

// Triple export pattern (lucide-react style)
export { ChartArea, ChartArea as ChartAreaIcon, ChartArea as SiChartArea };

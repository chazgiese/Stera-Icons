import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartScatterRegular } from './ChartScatterRegular';
import { ChartScatterRegularDuotone } from './ChartScatterRegularDuotone';
import { ChartScatterBold } from './ChartScatterBold';
import { ChartScatterBoldDuotone } from './ChartScatterBoldDuotone';
import { ChartScatterFill } from './ChartScatterFill';
import { ChartScatterFillDuotone } from './ChartScatterFillDuotone';

export interface ChartScatterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartScatter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartScatterRegular } from 'stera-icons/icons/ChartScatterRegular';
 */
const ChartScatter = memo(forwardRef<SVGSVGElement, ChartScatterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartScatterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartScatterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartScatterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartScatterFill ref={ref} {...rest} />;
  if (duotone) return <ChartScatterRegularDuotone ref={ref} {...rest} />;
  return <ChartScatterRegular ref={ref} {...rest} />;
}));

ChartScatter.displayName = 'ChartScatter';

// Triple export pattern (lucide-react style)
export { ChartScatter, ChartScatter as ChartScatterIcon, ChartScatter as SiChartScatter };

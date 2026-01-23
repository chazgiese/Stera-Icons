import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChartBarSquareRegular } from './ChartBarSquareRegular.js';
import { ChartBarSquareRegularDuotone } from './ChartBarSquareRegularDuotone.js';
import { ChartBarSquareBold } from './ChartBarSquareBold.js';
import { ChartBarSquareBoldDuotone } from './ChartBarSquareBoldDuotone.js';
import { ChartBarSquareFill } from './ChartBarSquareFill.js';
import { ChartBarSquareFillDuotone } from './ChartBarSquareFillDuotone.js';

export interface ChartBarSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarSquareRegular } from 'stera-icons/icons/ChartBarSquareRegular';
 */
const ChartBarSquare = memo(forwardRef<SVGSVGElement, ChartBarSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarSquareFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarSquareRegularDuotone ref={ref} {...rest} />;
  return <ChartBarSquareRegular ref={ref} {...rest} />;
}));

ChartBarSquare.displayName = 'ChartBarSquare';

// Triple export pattern (lucide-react style)
export { ChartBarSquare, ChartBarSquare as ChartBarSquareIcon, ChartBarSquare as SiChartBarSquare };
export default ChartBarSquare;

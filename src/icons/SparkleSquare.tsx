import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SparkleSquareRegular } from './SparkleSquareRegular.js';
import { SparkleSquareRegularDuotone } from './SparkleSquareRegularDuotone.js';
import { SparkleSquareBold } from './SparkleSquareBold.js';
import { SparkleSquareBoldDuotone } from './SparkleSquareBoldDuotone.js';
import { SparkleSquareFill } from './SparkleSquareFill.js';
import { SparkleSquareFillDuotone } from './SparkleSquareFillDuotone.js';

export interface SparkleSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SparkleSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SparkleSquareRegular } from 'stera-icons/icons/SparkleSquareRegular';
 */
const SparkleSquare = memo(forwardRef<SVGSVGElement, SparkleSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparkleSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparkleSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparkleSquareFill ref={ref} {...rest} />;
  if (duotone) return <SparkleSquareRegularDuotone ref={ref} {...rest} />;
  return <SparkleSquareRegular ref={ref} {...rest} />;
}));

SparkleSquare.displayName = 'SparkleSquare';

// Triple export pattern (lucide-react style)
export { SparkleSquare, SparkleSquare as SparkleSquareIcon, SparkleSquare as SiSparkleSquare };
export default SparkleSquare;

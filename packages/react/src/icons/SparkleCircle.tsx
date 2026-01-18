import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleCircleRegular } from './SparkleCircleRegular';
import { SparkleCircleRegularDuotone } from './SparkleCircleRegularDuotone';
import { SparkleCircleBold } from './SparkleCircleBold';
import { SparkleCircleBoldDuotone } from './SparkleCircleBoldDuotone';
import { SparkleCircleFill } from './SparkleCircleFill';
import { SparkleCircleFillDuotone } from './SparkleCircleFillDuotone';

export interface SparkleCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SparkleCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SparkleCircleRegular } from 'stera-icons/SparkleCircleRegular';
 */
const SparkleCircle = memo(forwardRef<SVGSVGElement, SparkleCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparkleCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparkleCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparkleCircleFill ref={ref} {...rest} />;
  if (duotone) return <SparkleCircleRegularDuotone ref={ref} {...rest} />;
  return <SparkleCircleRegular ref={ref} {...rest} />;
}));

SparkleCircle.displayName = 'SparkleCircle';

// Triple export pattern (lucide-react style)
export { SparkleCircle, SparkleCircle as SparkleCircleIcon, SparkleCircle as SiSparkleCircle };

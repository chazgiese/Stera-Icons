import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparklesRegular } from './SparklesRegular';
import { SparklesRegularDuotone } from './SparklesRegularDuotone';
import { SparklesBold } from './SparklesBold';
import { SparklesBoldDuotone } from './SparklesBoldDuotone';
import { SparklesFill } from './SparklesFill';
import { SparklesFillDuotone } from './SparklesFillDuotone';

export interface SparklesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sparkles with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SparklesRegular } from 'stera-icons/SparklesRegular';
 */
const Sparkles = memo(forwardRef<SVGSVGElement, SparklesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparklesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparklesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparklesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparklesFill ref={ref} {...rest} />;
  if (duotone) return <SparklesRegularDuotone ref={ref} {...rest} />;
  return <SparklesRegular ref={ref} {...rest} />;
}));

Sparkles.displayName = 'Sparkles';

export { Sparkles };

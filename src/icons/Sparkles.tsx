import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SparklesRegular } from './SparklesRegular.js';
import { SparklesRegularDuotone } from './SparklesRegularDuotone.js';
import { SparklesBold } from './SparklesBold.js';
import { SparklesBoldDuotone } from './SparklesBoldDuotone.js';
import { SparklesFill } from './SparklesFill.js';
import { SparklesFillDuotone } from './SparklesFillDuotone.js';

export interface SparklesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sparkles - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SparklesRegular } from 'stera-icons/icons/SparklesRegular';
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

// Triple export pattern (lucide-react style)
export { Sparkles, Sparkles as SparklesIcon, Sparkles as SiSparkles };
export default Sparkles;

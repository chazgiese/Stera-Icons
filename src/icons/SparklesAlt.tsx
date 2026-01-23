import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SparklesAltRegular } from './SparklesAltRegular.js';
import { SparklesAltRegularDuotone } from './SparklesAltRegularDuotone.js';
import { SparklesAltBold } from './SparklesAltBold.js';
import { SparklesAltBoldDuotone } from './SparklesAltBoldDuotone.js';
import { SparklesAltFill } from './SparklesAltFill.js';
import { SparklesAltFillDuotone } from './SparklesAltFillDuotone.js';

export interface SparklesAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SparklesAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SparklesAltRegular } from 'stera-icons/icons/SparklesAltRegular';
 */
const SparklesAlt = memo(forwardRef<SVGSVGElement, SparklesAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparklesAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparklesAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparklesAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparklesAltFill ref={ref} {...rest} />;
  if (duotone) return <SparklesAltRegularDuotone ref={ref} {...rest} />;
  return <SparklesAltRegular ref={ref} {...rest} />;
}));

SparklesAlt.displayName = 'SparklesAlt';

// Triple export pattern (lucide-react style)
export { SparklesAlt, SparklesAlt as SparklesAltIcon, SparklesAlt as SiSparklesAlt };
export default SparklesAlt;

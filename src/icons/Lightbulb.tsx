import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LightbulbRegular } from './LightbulbRegular.js';
import { LightbulbRegularDuotone } from './LightbulbRegularDuotone.js';
import { LightbulbBold } from './LightbulbBold.js';
import { LightbulbBoldDuotone } from './LightbulbBoldDuotone.js';
import { LightbulbFill } from './LightbulbFill.js';
import { LightbulbFillDuotone } from './LightbulbFillDuotone.js';

export interface LightbulbProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Lightbulb - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LightbulbRegular } from 'stera-icons/icons/LightbulbRegular';
 */
const Lightbulb = memo(forwardRef<SVGSVGElement, LightbulbProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LightbulbBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LightbulbBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LightbulbFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LightbulbFill ref={ref} {...rest} />;
  if (duotone) return <LightbulbRegularDuotone ref={ref} {...rest} />;
  return <LightbulbRegular ref={ref} {...rest} />;
}));

Lightbulb.displayName = 'Lightbulb';

// Triple export pattern (lucide-react style)
export { Lightbulb, Lightbulb as LightbulbIcon, Lightbulb as SiLightbulb };
export default Lightbulb;

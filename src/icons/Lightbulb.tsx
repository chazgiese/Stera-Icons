import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LightbulbRegular } from './LightbulbRegular';
import { LightbulbRegularDuotone } from './LightbulbRegularDuotone';
import { LightbulbBold } from './LightbulbBold';
import { LightbulbBoldDuotone } from './LightbulbBoldDuotone';
import { LightbulbFill } from './LightbulbFill';
import { LightbulbFillDuotone } from './LightbulbFillDuotone';

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

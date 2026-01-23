import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LightbulbOnRegular } from './LightbulbOnRegular.js';
import { LightbulbOnRegularDuotone } from './LightbulbOnRegularDuotone.js';
import { LightbulbOnBold } from './LightbulbOnBold.js';
import { LightbulbOnBoldDuotone } from './LightbulbOnBoldDuotone.js';
import { LightbulbOnFill } from './LightbulbOnFill.js';
import { LightbulbOnFillDuotone } from './LightbulbOnFillDuotone.js';

export interface LightbulbOnProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LightbulbOn - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LightbulbOnRegular } from 'stera-icons/icons/LightbulbOnRegular';
 */
const LightbulbOn = memo(forwardRef<SVGSVGElement, LightbulbOnProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LightbulbOnBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LightbulbOnBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LightbulbOnFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LightbulbOnFill ref={ref} {...rest} />;
  if (duotone) return <LightbulbOnRegularDuotone ref={ref} {...rest} />;
  return <LightbulbOnRegular ref={ref} {...rest} />;
}));

LightbulbOn.displayName = 'LightbulbOn';

// Triple export pattern (lucide-react style)
export { LightbulbOn, LightbulbOn as LightbulbOnIcon, LightbulbOn as SiLightbulbOn };
export default LightbulbOn;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LightbulbOnRegular } from './LightbulbOnRegular';
import { LightbulbOnRegularDuotone } from './LightbulbOnRegularDuotone';
import { LightbulbOnBold } from './LightbulbOnBold';
import { LightbulbOnBoldDuotone } from './LightbulbOnBoldDuotone';
import { LightbulbOnFill } from './LightbulbOnFill';
import { LightbulbOnFillDuotone } from './LightbulbOnFillDuotone';

export interface LightbulbOnProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LightbulbOn - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LightbulbOnRegular } from 'stera-icons/LightbulbOnRegular';
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

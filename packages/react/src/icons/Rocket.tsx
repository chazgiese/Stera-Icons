import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RocketRegular } from './RocketRegular';
import { RocketRegularDuotone } from './RocketRegularDuotone';
import { RocketBold } from './RocketBold';
import { RocketBoldDuotone } from './RocketBoldDuotone';
import { RocketFill } from './RocketFill';
import { RocketFillDuotone } from './RocketFillDuotone';

export interface RocketProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Rocket - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RocketRegular } from 'stera-icons/RocketRegular';
 */
const Rocket = memo(forwardRef<SVGSVGElement, RocketProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RocketBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RocketBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RocketFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RocketFill ref={ref} {...rest} />;
  if (duotone) return <RocketRegularDuotone ref={ref} {...rest} />;
  return <RocketRegular ref={ref} {...rest} />;
}));

Rocket.displayName = 'Rocket';

// Triple export pattern (lucide-react style)
export { Rocket, Rocket as RocketIcon, Rocket as SiRocket };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DropletRegular } from './DropletRegular';
import { DropletRegularDuotone } from './DropletRegularDuotone';
import { DropletBold } from './DropletBold';
import { DropletBoldDuotone } from './DropletBoldDuotone';
import { DropletFill } from './DropletFill';
import { DropletFillDuotone } from './DropletFillDuotone';

export interface DropletProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Droplet - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DropletRegular } from 'stera-icons/icons/DropletRegular';
 */
const Droplet = memo(forwardRef<SVGSVGElement, DropletProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DropletBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DropletBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DropletFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DropletFill ref={ref} {...rest} />;
  if (duotone) return <DropletRegularDuotone ref={ref} {...rest} />;
  return <DropletRegular ref={ref} {...rest} />;
}));

Droplet.displayName = 'Droplet';

// Triple export pattern (lucide-react style)
export { Droplet, Droplet as DropletIcon, Droplet as SiDroplet };
export default Droplet;

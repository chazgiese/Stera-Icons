import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleRegular } from './WineBottleRegular';
import { WineBottleRegularDuotone } from './WineBottleRegularDuotone';
import { WineBottleBold } from './WineBottleBold';
import { WineBottleBoldDuotone } from './WineBottleBoldDuotone';
import { WineBottleFill } from './WineBottleFill';
import { WineBottleFillDuotone } from './WineBottleFillDuotone';

export interface WineBottleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WineBottle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WineBottleRegular } from 'stera-icons/WineBottleRegular';
 */
const WineBottle = memo(forwardRef<SVGSVGElement, WineBottleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineBottleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WineBottleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WineBottleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WineBottleFill ref={ref} {...rest} />;
  if (duotone) return <WineBottleRegularDuotone ref={ref} {...rest} />;
  return <WineBottleRegular ref={ref} {...rest} />;
}));

WineBottle.displayName = 'WineBottle';

// Triple export pattern (lucide-react style)
export { WineBottle, WineBottle as WineBottleIcon, WineBottle as SiWineBottle };

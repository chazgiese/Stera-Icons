import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WineBottleLabelRegular } from './WineBottleLabelRegular';
import { WineBottleLabelRegularDuotone } from './WineBottleLabelRegularDuotone';
import { WineBottleLabelBold } from './WineBottleLabelBold';
import { WineBottleLabelBoldDuotone } from './WineBottleLabelBoldDuotone';
import { WineBottleLabelFill } from './WineBottleLabelFill';
import { WineBottleLabelFillDuotone } from './WineBottleLabelFillDuotone';

export interface WineBottleLabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WineBottleLabel - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WineBottleLabelRegular } from 'stera-icons/WineBottleLabelRegular';
 */
const WineBottleLabel = memo(forwardRef<SVGSVGElement, WineBottleLabelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WineBottleLabelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WineBottleLabelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WineBottleLabelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WineBottleLabelFill ref={ref} {...rest} />;
  if (duotone) return <WineBottleLabelRegularDuotone ref={ref} {...rest} />;
  return <WineBottleLabelRegular ref={ref} {...rest} />;
}));

WineBottleLabel.displayName = 'WineBottleLabel';

// Triple export pattern (lucide-react style)
export { WineBottleLabel, WineBottleLabel as WineBottleLabelIcon, WineBottleLabel as SiWineBottleLabel };

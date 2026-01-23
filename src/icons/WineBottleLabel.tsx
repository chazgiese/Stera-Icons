import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WineBottleLabelRegular } from './WineBottleLabelRegular.js';
import { WineBottleLabelRegularDuotone } from './WineBottleLabelRegularDuotone.js';
import { WineBottleLabelBold } from './WineBottleLabelBold.js';
import { WineBottleLabelBoldDuotone } from './WineBottleLabelBoldDuotone.js';
import { WineBottleLabelFill } from './WineBottleLabelFill.js';
import { WineBottleLabelFillDuotone } from './WineBottleLabelFillDuotone.js';

export interface WineBottleLabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * WineBottleLabel - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WineBottleLabelRegular } from 'stera-icons/icons/WineBottleLabelRegular';
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
export default WineBottleLabel;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BottleLabelRegular } from './BottleLabelRegular.js';
import { BottleLabelRegularDuotone } from './BottleLabelRegularDuotone.js';
import { BottleLabelBold } from './BottleLabelBold.js';
import { BottleLabelBoldDuotone } from './BottleLabelBoldDuotone.js';
import { BottleLabelFill } from './BottleLabelFill.js';
import { BottleLabelFillDuotone } from './BottleLabelFillDuotone.js';

export interface BottleLabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BottleLabel - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BottleLabelRegular } from 'stera-icons/icons/BottleLabelRegular';
 */
const BottleLabel = memo(forwardRef<SVGSVGElement, BottleLabelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleLabelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BottleLabelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BottleLabelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BottleLabelFill ref={ref} {...rest} />;
  if (duotone) return <BottleLabelRegularDuotone ref={ref} {...rest} />;
  return <BottleLabelRegular ref={ref} {...rest} />;
}));

BottleLabel.displayName = 'BottleLabel';

// Triple export pattern (lucide-react style)
export { BottleLabel, BottleLabel as BottleLabelIcon, BottleLabel as SiBottleLabel };
export default BottleLabel;

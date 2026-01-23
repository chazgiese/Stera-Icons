import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CrosshairRegular } from './CrosshairRegular.js';
import { CrosshairRegularDuotone } from './CrosshairRegularDuotone.js';
import { CrosshairBold } from './CrosshairBold.js';
import { CrosshairBoldDuotone } from './CrosshairBoldDuotone.js';
import { CrosshairFill } from './CrosshairFill.js';
import { CrosshairFillDuotone } from './CrosshairFillDuotone.js';

export interface CrosshairProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Crosshair - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CrosshairRegular } from 'stera-icons/icons/CrosshairRegular';
 */
const Crosshair = memo(forwardRef<SVGSVGElement, CrosshairProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CrosshairBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CrosshairBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CrosshairFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CrosshairFill ref={ref} {...rest} />;
  if (duotone) return <CrosshairRegularDuotone ref={ref} {...rest} />;
  return <CrosshairRegular ref={ref} {...rest} />;
}));

Crosshair.displayName = 'Crosshair';

// Triple export pattern (lucide-react style)
export { Crosshair, Crosshair as CrosshairIcon, Crosshair as SiCrosshair };
export default Crosshair;

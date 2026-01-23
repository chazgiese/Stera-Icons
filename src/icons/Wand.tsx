import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WandRegular } from './WandRegular.js';
import { WandRegularDuotone } from './WandRegularDuotone.js';
import { WandBold } from './WandBold.js';
import { WandBoldDuotone } from './WandBoldDuotone.js';
import { WandFill } from './WandFill.js';
import { WandFillDuotone } from './WandFillDuotone.js';

export interface WandProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Wand - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WandRegular } from 'stera-icons/icons/WandRegular';
 */
const Wand = memo(forwardRef<SVGSVGElement, WandProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WandBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WandBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WandFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WandFill ref={ref} {...rest} />;
  if (duotone) return <WandRegularDuotone ref={ref} {...rest} />;
  return <WandRegular ref={ref} {...rest} />;
}));

Wand.displayName = 'Wand';

// Triple export pattern (lucide-react style)
export { Wand, Wand as WandIcon, Wand as SiWand };
export default Wand;

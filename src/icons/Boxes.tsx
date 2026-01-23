import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BoxesRegular } from './BoxesRegular.js';
import { BoxesRegularDuotone } from './BoxesRegularDuotone.js';
import { BoxesBold } from './BoxesBold.js';
import { BoxesBoldDuotone } from './BoxesBoldDuotone.js';
import { BoxesFill } from './BoxesFill.js';
import { BoxesFillDuotone } from './BoxesFillDuotone.js';

export interface BoxesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Boxes - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BoxesRegular } from 'stera-icons/icons/BoxesRegular';
 */
const Boxes = memo(forwardRef<SVGSVGElement, BoxesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoxesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoxesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoxesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoxesFill ref={ref} {...rest} />;
  if (duotone) return <BoxesRegularDuotone ref={ref} {...rest} />;
  return <BoxesRegular ref={ref} {...rest} />;
}));

Boxes.displayName = 'Boxes';

// Triple export pattern (lucide-react style)
export { Boxes, Boxes as BoxesIcon, Boxes as SiBoxes };
export default Boxes;

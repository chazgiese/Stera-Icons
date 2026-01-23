import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DiamondRegular } from './DiamondRegular.js';
import { DiamondRegularDuotone } from './DiamondRegularDuotone.js';
import { DiamondBold } from './DiamondBold.js';
import { DiamondBoldDuotone } from './DiamondBoldDuotone.js';
import { DiamondFill } from './DiamondFill.js';
import { DiamondFillDuotone } from './DiamondFillDuotone.js';

export interface DiamondProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Diamond - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DiamondRegular } from 'stera-icons/icons/DiamondRegular';
 */
const Diamond = memo(forwardRef<SVGSVGElement, DiamondProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DiamondBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DiamondBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DiamondFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DiamondFill ref={ref} {...rest} />;
  if (duotone) return <DiamondRegularDuotone ref={ref} {...rest} />;
  return <DiamondRegular ref={ref} {...rest} />;
}));

Diamond.displayName = 'Diamond';

// Triple export pattern (lucide-react style)
export { Diamond, Diamond as DiamondIcon, Diamond as SiDiamond };
export default Diamond;

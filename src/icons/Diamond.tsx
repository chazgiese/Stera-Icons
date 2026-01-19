import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DiamondRegular } from './DiamondRegular';
import { DiamondRegularDuotone } from './DiamondRegularDuotone';
import { DiamondBold } from './DiamondBold';
import { DiamondBoldDuotone } from './DiamondBoldDuotone';
import { DiamondFill } from './DiamondFill';
import { DiamondFillDuotone } from './DiamondFillDuotone';

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

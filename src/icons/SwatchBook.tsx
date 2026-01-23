import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SwatchBookRegular } from './SwatchBookRegular.js';
import { SwatchBookRegularDuotone } from './SwatchBookRegularDuotone.js';
import { SwatchBookBold } from './SwatchBookBold.js';
import { SwatchBookBoldDuotone } from './SwatchBookBoldDuotone.js';
import { SwatchBookFill } from './SwatchBookFill.js';
import { SwatchBookFillDuotone } from './SwatchBookFillDuotone.js';

export interface SwatchBookProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SwatchBook - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SwatchBookRegular } from 'stera-icons/icons/SwatchBookRegular';
 */
const SwatchBook = memo(forwardRef<SVGSVGElement, SwatchBookProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SwatchBookBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SwatchBookBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SwatchBookFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SwatchBookFill ref={ref} {...rest} />;
  if (duotone) return <SwatchBookRegularDuotone ref={ref} {...rest} />;
  return <SwatchBookRegular ref={ref} {...rest} />;
}));

SwatchBook.displayName = 'SwatchBook';

// Triple export pattern (lucide-react style)
export { SwatchBook, SwatchBook as SwatchBookIcon, SwatchBook as SiSwatchBook };
export default SwatchBook;

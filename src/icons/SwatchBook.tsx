import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SwatchBookRegular } from './SwatchBookRegular';
import { SwatchBookRegularDuotone } from './SwatchBookRegularDuotone';
import { SwatchBookBold } from './SwatchBookBold';
import { SwatchBookBoldDuotone } from './SwatchBookBoldDuotone';
import { SwatchBookFill } from './SwatchBookFill';
import { SwatchBookFillDuotone } from './SwatchBookFillDuotone';

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

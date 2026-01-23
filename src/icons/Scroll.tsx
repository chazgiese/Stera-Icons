import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScrollRegular } from './ScrollRegular.js';
import { ScrollRegularDuotone } from './ScrollRegularDuotone.js';
import { ScrollBold } from './ScrollBold.js';
import { ScrollBoldDuotone } from './ScrollBoldDuotone.js';
import { ScrollFill } from './ScrollFill.js';
import { ScrollFillDuotone } from './ScrollFillDuotone.js';

export interface ScrollProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scroll - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScrollRegular } from 'stera-icons/icons/ScrollRegular';
 */
const Scroll = memo(forwardRef<SVGSVGElement, ScrollProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScrollBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScrollFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScrollFill ref={ref} {...rest} />;
  if (duotone) return <ScrollRegularDuotone ref={ref} {...rest} />;
  return <ScrollRegular ref={ref} {...rest} />;
}));

Scroll.displayName = 'Scroll';

// Triple export pattern (lucide-react style)
export { Scroll, Scroll as ScrollIcon, Scroll as SiScroll };
export default Scroll;

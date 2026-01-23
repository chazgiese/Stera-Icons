import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ScrollTextRegular } from './ScrollTextRegular.js';
import { ScrollTextRegularDuotone } from './ScrollTextRegularDuotone.js';
import { ScrollTextBold } from './ScrollTextBold.js';
import { ScrollTextBoldDuotone } from './ScrollTextBoldDuotone.js';
import { ScrollTextFill } from './ScrollTextFill.js';
import { ScrollTextFillDuotone } from './ScrollTextFillDuotone.js';

export interface ScrollTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScrollText - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScrollTextRegular } from 'stera-icons/icons/ScrollTextRegular';
 */
const ScrollText = memo(forwardRef<SVGSVGElement, ScrollTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScrollTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScrollTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScrollTextFill ref={ref} {...rest} />;
  if (duotone) return <ScrollTextRegularDuotone ref={ref} {...rest} />;
  return <ScrollTextRegular ref={ref} {...rest} />;
}));

ScrollText.displayName = 'ScrollText';

// Triple export pattern (lucide-react style)
export { ScrollText, ScrollText as ScrollTextIcon, ScrollText as SiScrollText };
export default ScrollText;

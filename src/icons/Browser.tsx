import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserRegular } from './BrowserRegular';
import { BrowserRegularDuotone } from './BrowserRegularDuotone';
import { BrowserBold } from './BrowserBold';
import { BrowserBoldDuotone } from './BrowserBoldDuotone';
import { BrowserFill } from './BrowserFill';
import { BrowserFillDuotone } from './BrowserFillDuotone';

export interface BrowserProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Browser - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrowserRegular } from 'stera-icons/icons/BrowserRegular';
 */
const Browser = memo(forwardRef<SVGSVGElement, BrowserProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrowserBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrowserFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrowserFill ref={ref} {...rest} />;
  if (duotone) return <BrowserRegularDuotone ref={ref} {...rest} />;
  return <BrowserRegular ref={ref} {...rest} />;
}));

Browser.displayName = 'Browser';

// Triple export pattern (lucide-react style)
export { Browser, Browser as BrowserIcon, Browser as SiBrowser };
export default Browser;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BrowserXRegular } from './BrowserXRegular.js';
import { BrowserXRegularDuotone } from './BrowserXRegularDuotone.js';
import { BrowserXBold } from './BrowserXBold.js';
import { BrowserXBoldDuotone } from './BrowserXBoldDuotone.js';
import { BrowserXFill } from './BrowserXFill.js';
import { BrowserXFillDuotone } from './BrowserXFillDuotone.js';

export interface BrowserXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrowserX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrowserXRegular } from 'stera-icons/icons/BrowserXRegular';
 */
const BrowserX = memo(forwardRef<SVGSVGElement, BrowserXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrowserXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrowserXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrowserXFill ref={ref} {...rest} />;
  if (duotone) return <BrowserXRegularDuotone ref={ref} {...rest} />;
  return <BrowserXRegular ref={ref} {...rest} />;
}));

BrowserX.displayName = 'BrowserX';

// Triple export pattern (lucide-react style)
export { BrowserX, BrowserX as BrowserXIcon, BrowserX as SiBrowserX };
export default BrowserX;

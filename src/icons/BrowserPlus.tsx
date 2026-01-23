import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BrowserPlusRegular } from './BrowserPlusRegular.js';
import { BrowserPlusRegularDuotone } from './BrowserPlusRegularDuotone.js';
import { BrowserPlusBold } from './BrowserPlusBold.js';
import { BrowserPlusBoldDuotone } from './BrowserPlusBoldDuotone.js';
import { BrowserPlusFill } from './BrowserPlusFill.js';
import { BrowserPlusFillDuotone } from './BrowserPlusFillDuotone.js';

export interface BrowserPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrowserPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrowserPlusRegular } from 'stera-icons/icons/BrowserPlusRegular';
 */
const BrowserPlus = memo(forwardRef<SVGSVGElement, BrowserPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrowserPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrowserPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrowserPlusFill ref={ref} {...rest} />;
  if (duotone) return <BrowserPlusRegularDuotone ref={ref} {...rest} />;
  return <BrowserPlusRegular ref={ref} {...rest} />;
}));

BrowserPlus.displayName = 'BrowserPlus';

// Triple export pattern (lucide-react style)
export { BrowserPlus, BrowserPlus as BrowserPlusIcon, BrowserPlus as SiBrowserPlus };
export default BrowserPlus;

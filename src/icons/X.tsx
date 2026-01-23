import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { XRegular } from './XRegular.js';
import { XRegularDuotone } from './XRegularDuotone.js';
import { XBold } from './XBold.js';
import { XBoldDuotone } from './XBoldDuotone.js';
import { XFill } from './XFill.js';
import { XFillDuotone } from './XFillDuotone.js';

export interface XProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * X - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { XRegular } from 'stera-icons/icons/XRegular';
 */
const X = memo(forwardRef<SVGSVGElement, XProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <XBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <XBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <XFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <XFill ref={ref} {...rest} />;
  if (duotone) return <XRegularDuotone ref={ref} {...rest} />;
  return <XRegular ref={ref} {...rest} />;
}));

X.displayName = 'X';

// Triple export pattern (lucide-react style)
export { X, X as XIcon, X as SiX };
export default X;

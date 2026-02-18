import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AsteriskRegular } from './AsteriskRegular.js';
import { AsteriskRegularDuotone } from './AsteriskRegularDuotone.js';
import { AsteriskBold } from './AsteriskBold.js';
import { AsteriskBoldDuotone } from './AsteriskBoldDuotone.js';
import { AsteriskFill } from './AsteriskFill.js';
import { AsteriskFillDuotone } from './AsteriskFillDuotone.js';

export interface AsteriskProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Asterisk - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AsteriskRegular } from 'stera-icons/icons/AsteriskRegular';
 */
const Asterisk = memo(forwardRef<SVGSVGElement, AsteriskProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AsteriskBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AsteriskBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AsteriskFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AsteriskFill ref={ref} {...rest} />;
  if (duotone) return <AsteriskRegularDuotone ref={ref} {...rest} />;
  return <AsteriskRegular ref={ref} {...rest} />;
}));

Asterisk.displayName = 'Asterisk';

// Triple export pattern (lucide-react style)
export { Asterisk, Asterisk as AsteriskIcon, Asterisk as SiAsterisk };
export default Asterisk;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HashRegular } from './HashRegular';
import { HashRegularDuotone } from './HashRegularDuotone';
import { HashBold } from './HashBold';
import { HashBoldDuotone } from './HashBoldDuotone';
import { HashFill } from './HashFill';
import { HashFillDuotone } from './HashFillDuotone';

export interface HashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HashRegular } from 'stera-icons/HashRegular';
 */
const Hash = memo(forwardRef<SVGSVGElement, HashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HashFill ref={ref} {...rest} />;
  if (duotone) return <HashRegularDuotone ref={ref} {...rest} />;
  return <HashRegular ref={ref} {...rest} />;
}));

Hash.displayName = 'Hash';

// Triple export pattern (lucide-react style)
export { Hash, Hash as HashIcon, Hash as SiHash };

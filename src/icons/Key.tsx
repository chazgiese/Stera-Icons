import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KeyRegular } from './KeyRegular.js';
import { KeyRegularDuotone } from './KeyRegularDuotone.js';
import { KeyBold } from './KeyBold.js';
import { KeyBoldDuotone } from './KeyBoldDuotone.js';
import { KeyFill } from './KeyFill.js';
import { KeyFillDuotone } from './KeyFillDuotone.js';

export interface KeyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Key - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyRegular } from 'stera-icons/icons/KeyRegular';
 */
const Key = memo(forwardRef<SVGSVGElement, KeyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyFill ref={ref} {...rest} />;
  if (duotone) return <KeyRegularDuotone ref={ref} {...rest} />;
  return <KeyRegular ref={ref} {...rest} />;
}));

Key.displayName = 'Key';

// Triple export pattern (lucide-react style)
export { Key, Key as KeyIcon, Key as SiKey };
export default Key;

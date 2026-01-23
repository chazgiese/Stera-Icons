import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { KeyAltRegular } from './KeyAltRegular.js';
import { KeyAltRegularDuotone } from './KeyAltRegularDuotone.js';
import { KeyAltBold } from './KeyAltBold.js';
import { KeyAltBoldDuotone } from './KeyAltBoldDuotone.js';
import { KeyAltFill } from './KeyAltFill.js';
import { KeyAltFillDuotone } from './KeyAltFillDuotone.js';

export interface KeyAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * KeyAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { KeyAltRegular } from 'stera-icons/icons/KeyAltRegular';
 */
const KeyAlt = memo(forwardRef<SVGSVGElement, KeyAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <KeyAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <KeyAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <KeyAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <KeyAltFill ref={ref} {...rest} />;
  if (duotone) return <KeyAltRegularDuotone ref={ref} {...rest} />;
  return <KeyAltRegular ref={ref} {...rest} />;
}));

KeyAlt.displayName = 'KeyAlt';

// Triple export pattern (lucide-react style)
export { KeyAlt, KeyAlt as KeyAltIcon, KeyAlt as SiKeyAlt };
export default KeyAlt;

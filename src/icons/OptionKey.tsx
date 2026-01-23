import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { OptionKeyRegular } from './OptionKeyRegular.js';
import { OptionKeyRegularDuotone } from './OptionKeyRegularDuotone.js';
import { OptionKeyBold } from './OptionKeyBold.js';
import { OptionKeyBoldDuotone } from './OptionKeyBoldDuotone.js';
import { OptionKeyFill } from './OptionKeyFill.js';
import { OptionKeyFillDuotone } from './OptionKeyFillDuotone.js';

export interface OptionKeyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * OptionKey - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { OptionKeyRegular } from 'stera-icons/icons/OptionKeyRegular';
 */
const OptionKey = memo(forwardRef<SVGSVGElement, OptionKeyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <OptionKeyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <OptionKeyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <OptionKeyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <OptionKeyFill ref={ref} {...rest} />;
  if (duotone) return <OptionKeyRegularDuotone ref={ref} {...rest} />;
  return <OptionKeyRegular ref={ref} {...rest} />;
}));

OptionKey.displayName = 'OptionKey';

// Triple export pattern (lucide-react style)
export { OptionKey, OptionKey as OptionKeyIcon, OptionKey as SiOptionKey };
export default OptionKey;

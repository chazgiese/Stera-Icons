import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlusRegular } from './PlusRegular.js';
import { PlusRegularDuotone } from './PlusRegularDuotone.js';
import { PlusBold } from './PlusBold.js';
import { PlusBoldDuotone } from './PlusBoldDuotone.js';
import { PlusFill } from './PlusFill.js';
import { PlusFillDuotone } from './PlusFillDuotone.js';

export interface PlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Plus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlusRegular } from 'stera-icons/icons/PlusRegular';
 */
const Plus = memo(forwardRef<SVGSVGElement, PlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlusFill ref={ref} {...rest} />;
  if (duotone) return <PlusRegularDuotone ref={ref} {...rest} />;
  return <PlusRegular ref={ref} {...rest} />;
}));

Plus.displayName = 'Plus';

// Triple export pattern (lucide-react style)
export { Plus, Plus as PlusIcon, Plus as SiPlus };
export default Plus;

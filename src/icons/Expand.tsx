import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ExpandRegular } from './ExpandRegular.js';
import { ExpandRegularDuotone } from './ExpandRegularDuotone.js';
import { ExpandBold } from './ExpandBold.js';
import { ExpandBoldDuotone } from './ExpandBoldDuotone.js';
import { ExpandFill } from './ExpandFill.js';
import { ExpandFillDuotone } from './ExpandFillDuotone.js';

export interface ExpandProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Expand - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExpandRegular } from 'stera-icons/icons/ExpandRegular';
 */
const Expand = memo(forwardRef<SVGSVGElement, ExpandProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExpandBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExpandFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExpandFill ref={ref} {...rest} />;
  if (duotone) return <ExpandRegularDuotone ref={ref} {...rest} />;
  return <ExpandRegular ref={ref} {...rest} />;
}));

Expand.displayName = 'Expand';

// Triple export pattern (lucide-react style)
export { Expand, Expand as ExpandIcon, Expand as SiExpand };
export default Expand;

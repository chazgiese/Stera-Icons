import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CollapseRegular } from './CollapseRegular.js';
import { CollapseRegularDuotone } from './CollapseRegularDuotone.js';
import { CollapseBold } from './CollapseBold.js';
import { CollapseBoldDuotone } from './CollapseBoldDuotone.js';
import { CollapseFill } from './CollapseFill.js';
import { CollapseFillDuotone } from './CollapseFillDuotone.js';

export interface CollapseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Collapse - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CollapseRegular } from 'stera-icons/icons/CollapseRegular';
 */
const Collapse = memo(forwardRef<SVGSVGElement, CollapseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CollapseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CollapseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CollapseFill ref={ref} {...rest} />;
  if (duotone) return <CollapseRegularDuotone ref={ref} {...rest} />;
  return <CollapseRegular ref={ref} {...rest} />;
}));

Collapse.displayName = 'Collapse';

// Triple export pattern (lucide-react style)
export { Collapse, Collapse as CollapseIcon, Collapse as SiCollapse };
export default Collapse;

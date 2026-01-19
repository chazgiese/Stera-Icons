import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandRegular } from './ExpandRegular';
import { ExpandRegularDuotone } from './ExpandRegularDuotone';
import { ExpandBold } from './ExpandBold';
import { ExpandBoldDuotone } from './ExpandBoldDuotone';
import { ExpandFill } from './ExpandFill';
import { ExpandFillDuotone } from './ExpandFillDuotone';

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

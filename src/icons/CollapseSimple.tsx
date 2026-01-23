import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CollapseSimpleRegular } from './CollapseSimpleRegular.js';
import { CollapseSimpleRegularDuotone } from './CollapseSimpleRegularDuotone.js';
import { CollapseSimpleBold } from './CollapseSimpleBold.js';
import { CollapseSimpleBoldDuotone } from './CollapseSimpleBoldDuotone.js';
import { CollapseSimpleFill } from './CollapseSimpleFill.js';
import { CollapseSimpleFillDuotone } from './CollapseSimpleFillDuotone.js';

export interface CollapseSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CollapseSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CollapseSimpleRegular } from 'stera-icons/icons/CollapseSimpleRegular';
 */
const CollapseSimple = memo(forwardRef<SVGSVGElement, CollapseSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CollapseSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CollapseSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CollapseSimpleFill ref={ref} {...rest} />;
  if (duotone) return <CollapseSimpleRegularDuotone ref={ref} {...rest} />;
  return <CollapseSimpleRegular ref={ref} {...rest} />;
}));

CollapseSimple.displayName = 'CollapseSimple';

// Triple export pattern (lucide-react style)
export { CollapseSimple, CollapseSimple as CollapseSimpleIcon, CollapseSimple as SiCollapseSimple };
export default CollapseSimple;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ExpandSimpleRegular } from './ExpandSimpleRegular';
import { ExpandSimpleRegularDuotone } from './ExpandSimpleRegularDuotone';
import { ExpandSimpleBold } from './ExpandSimpleBold';
import { ExpandSimpleBoldDuotone } from './ExpandSimpleBoldDuotone';
import { ExpandSimpleFill } from './ExpandSimpleFill';
import { ExpandSimpleFillDuotone } from './ExpandSimpleFillDuotone';

export interface ExpandSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExpandSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExpandSimpleRegular } from 'stera-icons/icons/ExpandSimpleRegular';
 */
const ExpandSimple = memo(forwardRef<SVGSVGElement, ExpandSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExpandSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExpandSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExpandSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExpandSimpleFill ref={ref} {...rest} />;
  if (duotone) return <ExpandSimpleRegularDuotone ref={ref} {...rest} />;
  return <ExpandSimpleRegular ref={ref} {...rest} />;
}));

ExpandSimple.displayName = 'ExpandSimple';

// Triple export pattern (lucide-react style)
export { ExpandSimple, ExpandSimple as ExpandSimpleIcon, ExpandSimple as SiExpandSimple };

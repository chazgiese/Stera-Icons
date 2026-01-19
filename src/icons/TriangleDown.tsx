import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TriangleDownRegular } from './TriangleDownRegular';
import { TriangleDownRegularDuotone } from './TriangleDownRegularDuotone';
import { TriangleDownBold } from './TriangleDownBold';
import { TriangleDownBoldDuotone } from './TriangleDownBoldDuotone';
import { TriangleDownFill } from './TriangleDownFill';
import { TriangleDownFillDuotone } from './TriangleDownFillDuotone';

export interface TriangleDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TriangleDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TriangleDownRegular } from 'stera-icons/icons/TriangleDownRegular';
 */
const TriangleDown = memo(forwardRef<SVGSVGElement, TriangleDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TriangleDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TriangleDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TriangleDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TriangleDownFill ref={ref} {...rest} />;
  if (duotone) return <TriangleDownRegularDuotone ref={ref} {...rest} />;
  return <TriangleDownRegular ref={ref} {...rest} />;
}));

TriangleDown.displayName = 'TriangleDown';

// Triple export pattern (lucide-react style)
export { TriangleDown, TriangleDown as TriangleDownIcon, TriangleDown as SiTriangleDown };

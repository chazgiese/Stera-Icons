import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutMasonryRegular } from './LayoutMasonryRegular.js';
import { LayoutMasonryRegularDuotone } from './LayoutMasonryRegularDuotone.js';
import { LayoutMasonryBold } from './LayoutMasonryBold.js';
import { LayoutMasonryBoldDuotone } from './LayoutMasonryBoldDuotone.js';
import { LayoutMasonryFill } from './LayoutMasonryFill.js';
import { LayoutMasonryFillDuotone } from './LayoutMasonryFillDuotone.js';

export interface LayoutMasonryProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutMasonry - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutMasonryRegular } from 'stera-icons/icons/LayoutMasonryRegular';
 */
const LayoutMasonry = memo(forwardRef<SVGSVGElement, LayoutMasonryProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutMasonryBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutMasonryBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutMasonryFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutMasonryFill ref={ref} {...rest} />;
  if (duotone) return <LayoutMasonryRegularDuotone ref={ref} {...rest} />;
  return <LayoutMasonryRegular ref={ref} {...rest} />;
}));

LayoutMasonry.displayName = 'LayoutMasonry';

// Triple export pattern (lucide-react style)
export { LayoutMasonry, LayoutMasonry as LayoutMasonryIcon, LayoutMasonry as SiLayoutMasonry };
export default LayoutMasonry;

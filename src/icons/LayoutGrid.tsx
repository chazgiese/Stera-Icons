import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutGridRegular } from './LayoutGridRegular';
import { LayoutGridRegularDuotone } from './LayoutGridRegularDuotone';
import { LayoutGridBold } from './LayoutGridBold';
import { LayoutGridBoldDuotone } from './LayoutGridBoldDuotone';
import { LayoutGridFill } from './LayoutGridFill';
import { LayoutGridFillDuotone } from './LayoutGridFillDuotone';

export interface LayoutGridProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutGrid - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutGridRegular } from 'stera-icons/icons/LayoutGridRegular';
 */
const LayoutGrid = memo(forwardRef<SVGSVGElement, LayoutGridProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutGridBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutGridBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutGridFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutGridFill ref={ref} {...rest} />;
  if (duotone) return <LayoutGridRegularDuotone ref={ref} {...rest} />;
  return <LayoutGridRegular ref={ref} {...rest} />;
}));

LayoutGrid.displayName = 'LayoutGrid';

// Triple export pattern (lucide-react style)
export { LayoutGrid, LayoutGrid as LayoutGridIcon, LayoutGrid as SiLayoutGrid };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CollapseSimpleAltRegular } from './CollapseSimpleAltRegular';
import { CollapseSimpleAltRegularDuotone } from './CollapseSimpleAltRegularDuotone';
import { CollapseSimpleAltBold } from './CollapseSimpleAltBold';
import { CollapseSimpleAltBoldDuotone } from './CollapseSimpleAltBoldDuotone';
import { CollapseSimpleAltFill } from './CollapseSimpleAltFill';
import { CollapseSimpleAltFillDuotone } from './CollapseSimpleAltFillDuotone';

export interface CollapseSimpleAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CollapseSimpleAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CollapseSimpleAltRegular } from 'stera-icons/icons/CollapseSimpleAltRegular';
 */
const CollapseSimpleAlt = memo(forwardRef<SVGSVGElement, CollapseSimpleAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseSimpleAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CollapseSimpleAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CollapseSimpleAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CollapseSimpleAltFill ref={ref} {...rest} />;
  if (duotone) return <CollapseSimpleAltRegularDuotone ref={ref} {...rest} />;
  return <CollapseSimpleAltRegular ref={ref} {...rest} />;
}));

CollapseSimpleAlt.displayName = 'CollapseSimpleAlt';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAlt, CollapseSimpleAlt as CollapseSimpleAltIcon, CollapseSimpleAlt as SiCollapseSimpleAlt };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsRightTopRegular } from './PanelsRightTopRegular';
import { PanelsRightTopRegularDuotone } from './PanelsRightTopRegularDuotone';
import { PanelsRightTopBold } from './PanelsRightTopBold';
import { PanelsRightTopBoldDuotone } from './PanelsRightTopBoldDuotone';
import { PanelsRightTopFill } from './PanelsRightTopFill';
import { PanelsRightTopFillDuotone } from './PanelsRightTopFillDuotone';

export interface PanelsRightTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelsRightTop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelsRightTopRegular } from 'stera-icons/icons/PanelsRightTopRegular';
 */
const PanelsRightTop = memo(forwardRef<SVGSVGElement, PanelsRightTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsRightTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelsRightTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelsRightTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelsRightTopFill ref={ref} {...rest} />;
  if (duotone) return <PanelsRightTopRegularDuotone ref={ref} {...rest} />;
  return <PanelsRightTopRegular ref={ref} {...rest} />;
}));

PanelsRightTop.displayName = 'PanelsRightTop';

// Triple export pattern (lucide-react style)
export { PanelsRightTop, PanelsRightTop as PanelsRightTopIcon, PanelsRightTop as SiPanelsRightTop };
export default PanelsRightTop;

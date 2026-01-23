import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PanelsRightTopRegular } from './PanelsRightTopRegular.js';
import { PanelsRightTopRegularDuotone } from './PanelsRightTopRegularDuotone.js';
import { PanelsRightTopBold } from './PanelsRightTopBold.js';
import { PanelsRightTopBoldDuotone } from './PanelsRightTopBoldDuotone.js';
import { PanelsRightTopFill } from './PanelsRightTopFill.js';
import { PanelsRightTopFillDuotone } from './PanelsRightTopFillDuotone.js';

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

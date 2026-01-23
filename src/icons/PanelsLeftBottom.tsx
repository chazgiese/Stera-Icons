import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PanelsLeftBottomRegular } from './PanelsLeftBottomRegular.js';
import { PanelsLeftBottomRegularDuotone } from './PanelsLeftBottomRegularDuotone.js';
import { PanelsLeftBottomBold } from './PanelsLeftBottomBold.js';
import { PanelsLeftBottomBoldDuotone } from './PanelsLeftBottomBoldDuotone.js';
import { PanelsLeftBottomFill } from './PanelsLeftBottomFill.js';
import { PanelsLeftBottomFillDuotone } from './PanelsLeftBottomFillDuotone.js';

export interface PanelsLeftBottomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelsLeftBottom - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelsLeftBottomRegular } from 'stera-icons/icons/PanelsLeftBottomRegular';
 */
const PanelsLeftBottom = memo(forwardRef<SVGSVGElement, PanelsLeftBottomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsLeftBottomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelsLeftBottomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelsLeftBottomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelsLeftBottomFill ref={ref} {...rest} />;
  if (duotone) return <PanelsLeftBottomRegularDuotone ref={ref} {...rest} />;
  return <PanelsLeftBottomRegular ref={ref} {...rest} />;
}));

PanelsLeftBottom.displayName = 'PanelsLeftBottom';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottom, PanelsLeftBottom as PanelsLeftBottomIcon, PanelsLeftBottom as SiPanelsLeftBottom };
export default PanelsLeftBottom;

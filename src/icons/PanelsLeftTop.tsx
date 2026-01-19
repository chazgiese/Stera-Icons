import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsLeftTopRegular } from './PanelsLeftTopRegular';
import { PanelsLeftTopRegularDuotone } from './PanelsLeftTopRegularDuotone';
import { PanelsLeftTopBold } from './PanelsLeftTopBold';
import { PanelsLeftTopBoldDuotone } from './PanelsLeftTopBoldDuotone';
import { PanelsLeftTopFill } from './PanelsLeftTopFill';
import { PanelsLeftTopFillDuotone } from './PanelsLeftTopFillDuotone';

export interface PanelsLeftTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelsLeftTop - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelsLeftTopRegular } from 'stera-icons/icons/PanelsLeftTopRegular';
 */
const PanelsLeftTop = memo(forwardRef<SVGSVGElement, PanelsLeftTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsLeftTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelsLeftTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelsLeftTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelsLeftTopFill ref={ref} {...rest} />;
  if (duotone) return <PanelsLeftTopRegularDuotone ref={ref} {...rest} />;
  return <PanelsLeftTopRegular ref={ref} {...rest} />;
}));

PanelsLeftTop.displayName = 'PanelsLeftTop';

// Triple export pattern (lucide-react style)
export { PanelsLeftTop, PanelsLeftTop as PanelsLeftTopIcon, PanelsLeftTop as SiPanelsLeftTop };
export default PanelsLeftTop;

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelsRightBottomRegular } from './PanelsRightBottomRegular';
import { PanelsRightBottomRegularDuotone } from './PanelsRightBottomRegularDuotone';
import { PanelsRightBottomBold } from './PanelsRightBottomBold';
import { PanelsRightBottomBoldDuotone } from './PanelsRightBottomBoldDuotone';
import { PanelsRightBottomFill } from './PanelsRightBottomFill';
import { PanelsRightBottomFillDuotone } from './PanelsRightBottomFillDuotone';

export interface PanelsRightBottomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelsRightBottom - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelsRightBottomRegular } from 'stera-icons/PanelsRightBottomRegular';
 */
const PanelsRightBottom = memo(forwardRef<SVGSVGElement, PanelsRightBottomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelsRightBottomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelsRightBottomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelsRightBottomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelsRightBottomFill ref={ref} {...rest} />;
  if (duotone) return <PanelsRightBottomRegularDuotone ref={ref} {...rest} />;
  return <PanelsRightBottomRegular ref={ref} {...rest} />;
}));

PanelsRightBottom.displayName = 'PanelsRightBottom';

// Triple export pattern (lucide-react style)
export { PanelsRightBottom, PanelsRightBottom as PanelsRightBottomIcon, PanelsRightBottom as SiPanelsRightBottom };

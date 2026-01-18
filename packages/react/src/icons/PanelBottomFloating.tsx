import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelBottomFloatingRegular } from './PanelBottomFloatingRegular';
import { PanelBottomFloatingRegularDuotone } from './PanelBottomFloatingRegularDuotone';
import { PanelBottomFloatingBold } from './PanelBottomFloatingBold';
import { PanelBottomFloatingBoldDuotone } from './PanelBottomFloatingBoldDuotone';
import { PanelBottomFloatingFill } from './PanelBottomFloatingFill';
import { PanelBottomFloatingFillDuotone } from './PanelBottomFloatingFillDuotone';

export interface PanelBottomFloatingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelBottomFloating - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelBottomFloatingRegular } from 'stera-icons/PanelBottomFloatingRegular';
 */
const PanelBottomFloating = memo(forwardRef<SVGSVGElement, PanelBottomFloatingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelBottomFloatingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelBottomFloatingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelBottomFloatingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelBottomFloatingFill ref={ref} {...rest} />;
  if (duotone) return <PanelBottomFloatingRegularDuotone ref={ref} {...rest} />;
  return <PanelBottomFloatingRegular ref={ref} {...rest} />;
}));

PanelBottomFloating.displayName = 'PanelBottomFloating';

// Triple export pattern (lucide-react style)
export { PanelBottomFloating, PanelBottomFloating as PanelBottomFloatingIcon, PanelBottomFloating as SiPanelBottomFloating };

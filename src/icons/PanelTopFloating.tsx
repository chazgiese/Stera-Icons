import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelTopFloatingRegular } from './PanelTopFloatingRegular';
import { PanelTopFloatingRegularDuotone } from './PanelTopFloatingRegularDuotone';
import { PanelTopFloatingBold } from './PanelTopFloatingBold';
import { PanelTopFloatingBoldDuotone } from './PanelTopFloatingBoldDuotone';
import { PanelTopFloatingFill } from './PanelTopFloatingFill';
import { PanelTopFloatingFillDuotone } from './PanelTopFloatingFillDuotone';

export interface PanelTopFloatingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelTopFloating - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelTopFloatingRegular } from 'stera-icons/icons/PanelTopFloatingRegular';
 */
const PanelTopFloating = memo(forwardRef<SVGSVGElement, PanelTopFloatingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelTopFloatingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelTopFloatingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelTopFloatingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelTopFloatingFill ref={ref} {...rest} />;
  if (duotone) return <PanelTopFloatingRegularDuotone ref={ref} {...rest} />;
  return <PanelTopFloatingRegular ref={ref} {...rest} />;
}));

PanelTopFloating.displayName = 'PanelTopFloating';

// Triple export pattern (lucide-react style)
export { PanelTopFloating, PanelTopFloating as PanelTopFloatingIcon, PanelTopFloating as SiPanelTopFloating };
export default PanelTopFloating;

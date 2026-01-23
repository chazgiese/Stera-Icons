import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PanelRightFloatingRegular } from './PanelRightFloatingRegular.js';
import { PanelRightFloatingRegularDuotone } from './PanelRightFloatingRegularDuotone.js';
import { PanelRightFloatingBold } from './PanelRightFloatingBold.js';
import { PanelRightFloatingBoldDuotone } from './PanelRightFloatingBoldDuotone.js';
import { PanelRightFloatingFill } from './PanelRightFloatingFill.js';
import { PanelRightFloatingFillDuotone } from './PanelRightFloatingFillDuotone.js';

export interface PanelRightFloatingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelRightFloating - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelRightFloatingRegular } from 'stera-icons/icons/PanelRightFloatingRegular';
 */
const PanelRightFloating = memo(forwardRef<SVGSVGElement, PanelRightFloatingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelRightFloatingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelRightFloatingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelRightFloatingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelRightFloatingFill ref={ref} {...rest} />;
  if (duotone) return <PanelRightFloatingRegularDuotone ref={ref} {...rest} />;
  return <PanelRightFloatingRegular ref={ref} {...rest} />;
}));

PanelRightFloating.displayName = 'PanelRightFloating';

// Triple export pattern (lucide-react style)
export { PanelRightFloating, PanelRightFloating as PanelRightFloatingIcon, PanelRightFloating as SiPanelRightFloating };
export default PanelRightFloating;

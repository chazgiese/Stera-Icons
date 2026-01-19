import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelLeftFloatingRegular } from './PanelLeftFloatingRegular';
import { PanelLeftFloatingRegularDuotone } from './PanelLeftFloatingRegularDuotone';
import { PanelLeftFloatingBold } from './PanelLeftFloatingBold';
import { PanelLeftFloatingBoldDuotone } from './PanelLeftFloatingBoldDuotone';
import { PanelLeftFloatingFill } from './PanelLeftFloatingFill';
import { PanelLeftFloatingFillDuotone } from './PanelLeftFloatingFillDuotone';

export interface PanelLeftFloatingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelLeftFloating - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PanelLeftFloatingRegular } from 'stera-icons/icons/PanelLeftFloatingRegular';
 */
const PanelLeftFloating = memo(forwardRef<SVGSVGElement, PanelLeftFloatingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PanelLeftFloatingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PanelLeftFloatingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PanelLeftFloatingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PanelLeftFloatingFill ref={ref} {...rest} />;
  if (duotone) return <PanelLeftFloatingRegularDuotone ref={ref} {...rest} />;
  return <PanelLeftFloatingRegular ref={ref} {...rest} />;
}));

PanelLeftFloating.displayName = 'PanelLeftFloating';

// Triple export pattern (lucide-react style)
export { PanelLeftFloating, PanelLeftFloating as PanelLeftFloatingIcon, PanelLeftFloating as SiPanelLeftFloating };

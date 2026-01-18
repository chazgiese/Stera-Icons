import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PanelRightFloatingRegular } from './PanelRightFloatingRegular';
import { PanelRightFloatingRegularDuotone } from './PanelRightFloatingRegularDuotone';
import { PanelRightFloatingBold } from './PanelRightFloatingBold';
import { PanelRightFloatingBoldDuotone } from './PanelRightFloatingBoldDuotone';
import { PanelRightFloatingFill } from './PanelRightFloatingFill';
import { PanelRightFloatingFillDuotone } from './PanelRightFloatingFillDuotone';

export interface PanelRightFloatingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PanelRightFloating with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PanelRightFloatingRegular } from 'stera-icons/PanelRightFloatingRegular';
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

export { PanelRightFloating };

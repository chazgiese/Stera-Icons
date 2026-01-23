import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { LayoutPanelLeftRegular } from './LayoutPanelLeftRegular.js';
import { LayoutPanelLeftRegularDuotone } from './LayoutPanelLeftRegularDuotone.js';
import { LayoutPanelLeftBold } from './LayoutPanelLeftBold.js';
import { LayoutPanelLeftBoldDuotone } from './LayoutPanelLeftBoldDuotone.js';
import { LayoutPanelLeftFill } from './LayoutPanelLeftFill.js';
import { LayoutPanelLeftFillDuotone } from './LayoutPanelLeftFillDuotone.js';

export interface LayoutPanelLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutPanelLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutPanelLeftRegular } from 'stera-icons/icons/LayoutPanelLeftRegular';
 */
const LayoutPanelLeft = memo(forwardRef<SVGSVGElement, LayoutPanelLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutPanelLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutPanelLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutPanelLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutPanelLeftFill ref={ref} {...rest} />;
  if (duotone) return <LayoutPanelLeftRegularDuotone ref={ref} {...rest} />;
  return <LayoutPanelLeftRegular ref={ref} {...rest} />;
}));

LayoutPanelLeft.displayName = 'LayoutPanelLeft';

// Triple export pattern (lucide-react style)
export { LayoutPanelLeft, LayoutPanelLeft as LayoutPanelLeftIcon, LayoutPanelLeft as SiLayoutPanelLeft };
export default LayoutPanelLeft;

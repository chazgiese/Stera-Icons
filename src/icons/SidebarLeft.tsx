import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SidebarLeftRegular } from './SidebarLeftRegular.js';
import { SidebarLeftRegularDuotone } from './SidebarLeftRegularDuotone.js';
import { SidebarLeftBold } from './SidebarLeftBold.js';
import { SidebarLeftBoldDuotone } from './SidebarLeftBoldDuotone.js';
import { SidebarLeftFill } from './SidebarLeftFill.js';
import { SidebarLeftFillDuotone } from './SidebarLeftFillDuotone.js';

export interface SidebarLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SidebarLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SidebarLeftRegular } from 'stera-icons/icons/SidebarLeftRegular';
 */
const SidebarLeft = memo(forwardRef<SVGSVGElement, SidebarLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SidebarLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SidebarLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SidebarLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SidebarLeftFill ref={ref} {...rest} />;
  if (duotone) return <SidebarLeftRegularDuotone ref={ref} {...rest} />;
  return <SidebarLeftRegular ref={ref} {...rest} />;
}));

SidebarLeft.displayName = 'SidebarLeft';

// Triple export pattern (lucide-react style)
export { SidebarLeft, SidebarLeft as SidebarLeftIcon, SidebarLeft as SiSidebarLeft };
export default SidebarLeft;

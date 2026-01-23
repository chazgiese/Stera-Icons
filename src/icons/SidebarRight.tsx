import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SidebarRightRegular } from './SidebarRightRegular.js';
import { SidebarRightRegularDuotone } from './SidebarRightRegularDuotone.js';
import { SidebarRightBold } from './SidebarRightBold.js';
import { SidebarRightBoldDuotone } from './SidebarRightBoldDuotone.js';
import { SidebarRightFill } from './SidebarRightFill.js';
import { SidebarRightFillDuotone } from './SidebarRightFillDuotone.js';

export interface SidebarRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SidebarRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SidebarRightRegular } from 'stera-icons/icons/SidebarRightRegular';
 */
const SidebarRight = memo(forwardRef<SVGSVGElement, SidebarRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SidebarRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SidebarRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SidebarRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SidebarRightFill ref={ref} {...rest} />;
  if (duotone) return <SidebarRightRegularDuotone ref={ref} {...rest} />;
  return <SidebarRightRegular ref={ref} {...rest} />;
}));

SidebarRight.displayName = 'SidebarRight';

// Triple export pattern (lucide-react style)
export { SidebarRight, SidebarRight as SidebarRightIcon, SidebarRight as SiSidebarRight };
export default SidebarRight;

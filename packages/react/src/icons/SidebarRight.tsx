import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarRightRegular } from './SidebarRightRegular';
import { SidebarRightRegularDuotone } from './SidebarRightRegularDuotone';
import { SidebarRightBold } from './SidebarRightBold';
import { SidebarRightBoldDuotone } from './SidebarRightBoldDuotone';
import { SidebarRightFill } from './SidebarRightFill';
import { SidebarRightFillDuotone } from './SidebarRightFillDuotone';

export interface SidebarRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SidebarRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SidebarRightRegular } from 'stera-icons/SidebarRightRegular';
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

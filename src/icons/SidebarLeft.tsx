import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SidebarLeftRegular } from './SidebarLeftRegular';
import { SidebarLeftRegularDuotone } from './SidebarLeftRegularDuotone';
import { SidebarLeftBold } from './SidebarLeftBold';
import { SidebarLeftBoldDuotone } from './SidebarLeftBoldDuotone';
import { SidebarLeftFill } from './SidebarLeftFill';
import { SidebarLeftFillDuotone } from './SidebarLeftFillDuotone';

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

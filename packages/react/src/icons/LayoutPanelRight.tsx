import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutPanelRightRegular } from './LayoutPanelRightRegular';
import { LayoutPanelRightRegularDuotone } from './LayoutPanelRightRegularDuotone';
import { LayoutPanelRightBold } from './LayoutPanelRightBold';
import { LayoutPanelRightBoldDuotone } from './LayoutPanelRightBoldDuotone';
import { LayoutPanelRightFill } from './LayoutPanelRightFill';
import { LayoutPanelRightFillDuotone } from './LayoutPanelRightFillDuotone';

export interface LayoutPanelRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutPanelRight - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutPanelRightRegular } from 'stera-icons/LayoutPanelRightRegular';
 */
const LayoutPanelRight = memo(forwardRef<SVGSVGElement, LayoutPanelRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutPanelRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayoutPanelRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayoutPanelRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayoutPanelRightFill ref={ref} {...rest} />;
  if (duotone) return <LayoutPanelRightRegularDuotone ref={ref} {...rest} />;
  return <LayoutPanelRightRegular ref={ref} {...rest} />;
}));

LayoutPanelRight.displayName = 'LayoutPanelRight';

// Triple export pattern (lucide-react style)
export { LayoutPanelRight, LayoutPanelRight as LayoutPanelRightIcon, LayoutPanelRight as SiLayoutPanelRight };

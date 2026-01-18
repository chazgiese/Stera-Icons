import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutPanelLeftRegular } from './LayoutPanelLeftRegular';
import { LayoutPanelLeftRegularDuotone } from './LayoutPanelLeftRegularDuotone';
import { LayoutPanelLeftBold } from './LayoutPanelLeftBold';
import { LayoutPanelLeftBoldDuotone } from './LayoutPanelLeftBoldDuotone';
import { LayoutPanelLeftFill } from './LayoutPanelLeftFill';
import { LayoutPanelLeftFillDuotone } from './LayoutPanelLeftFillDuotone';

export interface LayoutPanelLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayoutPanelLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LayoutPanelLeftRegular } from 'stera-icons/LayoutPanelLeftRegular';
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

export { LayoutPanelLeft };

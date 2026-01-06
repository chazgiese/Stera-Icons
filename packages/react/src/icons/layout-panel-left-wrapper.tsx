import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutPanelLeftIcon as RegularLayoutPanelLeftIcon } from './layout-panel-left';
import { LayoutPanelLeftIconDuotone as LayoutPanelLeftIconDuotone } from './layout-panel-left-duotone';
import { LayoutPanelLeftIconBold as LayoutPanelLeftIconBold } from './layout-panel-left-bold';
import { LayoutPanelLeftIconBoldDuotone as LayoutPanelLeftIconBoldDuotone } from './layout-panel-left-bold-duotone';
import { LayoutPanelLeftIconFill as LayoutPanelLeftIconFill } from './layout-panel-left-fill';
import { LayoutPanelLeftIconFillDuotone as LayoutPanelLeftIconFillDuotone } from './layout-panel-left-fill-duotone';

export interface LayoutPanelLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutPanelLeftIcon = memo(forwardRef<SVGSVGElement, LayoutPanelLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutPanelLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutPanelLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutPanelLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutPanelLeftIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutPanelLeftIconDuotone ref={ref} {...props} />;
  return <RegularLayoutPanelLeftIcon ref={ref} {...props} />;
}));

LayoutPanelLeftIcon.displayName = 'LayoutPanelLeftIcon';

export { LayoutPanelLeftIcon };

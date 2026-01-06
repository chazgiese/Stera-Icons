import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayoutPanelRightIcon as RegularLayoutPanelRightIcon } from './layout-panel-right';
import { LayoutPanelRightIconDuotone as LayoutPanelRightIconDuotone } from './layout-panel-right-duotone';
import { LayoutPanelRightIconBold as LayoutPanelRightIconBold } from './layout-panel-right-bold';
import { LayoutPanelRightIconBoldDuotone as LayoutPanelRightIconBoldDuotone } from './layout-panel-right-bold-duotone';
import { LayoutPanelRightIconFill as LayoutPanelRightIconFill } from './layout-panel-right-fill';
import { LayoutPanelRightIconFillDuotone as LayoutPanelRightIconFillDuotone } from './layout-panel-right-fill-duotone';

export interface LayoutPanelRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LayoutPanelRightIcon = memo(forwardRef<SVGSVGElement, LayoutPanelRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayoutPanelRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LayoutPanelRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LayoutPanelRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LayoutPanelRightIconFill ref={ref} {...props} />;
  if (duotone) return <LayoutPanelRightIconDuotone ref={ref} {...props} />;
  return <RegularLayoutPanelRightIcon ref={ref} {...props} />;
}));

LayoutPanelRightIcon.displayName = 'LayoutPanelRightIcon';

export { LayoutPanelRightIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutPanelLeftIcon as RegularLayoutPanelLeftIcon } from './layout-panel-left';
import { LayoutPanelLeftIconBold } from './layout-panel-left-bold';
import { LayoutPanelLeftIconFilled } from './layout-panel-left-filled';
import { LayoutPanelLeftIconFilltone } from './layout-panel-left-filltone';
import { LayoutPanelLeftIconLinetone } from './layout-panel-left-linetone';

export interface LayoutPanelLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutPanelLeftIcon = memo(forwardRef<SVGSVGElement, LayoutPanelLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutPanelLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutPanelLeftIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutPanelLeftIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutPanelLeftIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutPanelLeftIcon ref={ref} {...props} />;
  }
}));

LayoutPanelLeftIcon.displayName = 'LayoutPanelLeftIcon';

export { LayoutPanelLeftIcon };

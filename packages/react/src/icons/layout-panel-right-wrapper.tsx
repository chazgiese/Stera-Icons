import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LayoutPanelRightIcon as RegularLayoutPanelRightIcon } from './layout-panel-right';
import { LayoutPanelRightIconBold } from './layout-panel-right-bold';
import { LayoutPanelRightIconFilled } from './layout-panel-right-filled';
import { LayoutPanelRightIconFilltone } from './layout-panel-right-filltone';
import { LayoutPanelRightIconLinetone } from './layout-panel-right-linetone';

export interface LayoutPanelRightIconProps extends IconProps {
  variant?: IconVariant;
}

const LayoutPanelRightIcon = memo(forwardRef<SVGSVGElement, LayoutPanelRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayoutPanelRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayoutPanelRightIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LayoutPanelRightIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LayoutPanelRightIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLayoutPanelRightIcon ref={ref} {...props} />;
  }
}));

LayoutPanelRightIcon.displayName = 'LayoutPanelRightIcon';

export { LayoutPanelRightIcon };

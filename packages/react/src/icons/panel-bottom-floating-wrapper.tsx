import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelBottomFloatingIcon as RegularPanelBottomFloatingIcon } from './panel-bottom-floating';
import { PanelBottomFloatingIconBold } from './panel-bottom-floating-bold';
import { PanelBottomFloatingIconFilled } from './panel-bottom-floating-filled';
import { PanelBottomFloatingIconFilltone } from './panel-bottom-floating-filltone';
import { PanelBottomFloatingIconLinetone } from './panel-bottom-floating-linetone';

export interface PanelBottomFloatingIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelBottomFloatingIcon = memo(forwardRef<SVGSVGElement, PanelBottomFloatingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelBottomFloatingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelBottomFloatingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelBottomFloatingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelBottomFloatingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelBottomFloatingIcon ref={ref} {...props} />;
  }
}));

PanelBottomFloatingIcon.displayName = 'PanelBottomFloatingIcon';

export { PanelBottomFloatingIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelLeftFloatingIcon as RegularPanelLeftFloatingIcon } from './panel-left-floating';
import { PanelLeftFloatingIconBold } from './panel-left-floating-bold';
import { PanelLeftFloatingIconFilled } from './panel-left-floating-filled';
import { PanelLeftFloatingIconFilltone } from './panel-left-floating-filltone';
import { PanelLeftFloatingIconLinetone } from './panel-left-floating-linetone';

export interface PanelLeftFloatingIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelLeftFloatingIcon = memo(forwardRef<SVGSVGElement, PanelLeftFloatingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelLeftFloatingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelLeftFloatingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelLeftFloatingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelLeftFloatingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelLeftFloatingIcon ref={ref} {...props} />;
  }
}));

PanelLeftFloatingIcon.displayName = 'PanelLeftFloatingIcon';

export { PanelLeftFloatingIcon };

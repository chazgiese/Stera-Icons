import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelRightFloatingIcon as RegularPanelRightFloatingIcon } from './panel-right-floating';
import { PanelRightFloatingIconBold } from './panel-right-floating-bold';
import { PanelRightFloatingIconFilled } from './panel-right-floating-filled';
import { PanelRightFloatingIconFilltone } from './panel-right-floating-filltone';
import { PanelRightFloatingIconLinetone } from './panel-right-floating-linetone';

export interface PanelRightFloatingIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelRightFloatingIcon = memo(forwardRef<SVGSVGElement, PanelRightFloatingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelRightFloatingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelRightFloatingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelRightFloatingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelRightFloatingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelRightFloatingIcon ref={ref} {...props} />;
  }
}));

PanelRightFloatingIcon.displayName = 'PanelRightFloatingIcon';

export { PanelRightFloatingIcon };

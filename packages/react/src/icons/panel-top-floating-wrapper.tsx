import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PanelTopFloatingIcon as RegularPanelTopFloatingIcon } from './panel-top-floating';
import { PanelTopFloatingIconBold } from './panel-top-floating-bold';
import { PanelTopFloatingIconFilled } from './panel-top-floating-filled';
import { PanelTopFloatingIconFilltone } from './panel-top-floating-filltone';
import { PanelTopFloatingIconLinetone } from './panel-top-floating-linetone';

export interface PanelTopFloatingIconProps extends IconProps {
  variant?: IconVariant;
}

const PanelTopFloatingIcon = memo(forwardRef<SVGSVGElement, PanelTopFloatingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PanelTopFloatingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PanelTopFloatingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PanelTopFloatingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PanelTopFloatingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPanelTopFloatingIcon ref={ref} {...props} />;
  }
}));

PanelTopFloatingIcon.displayName = 'PanelTopFloatingIcon';

export { PanelTopFloatingIcon };

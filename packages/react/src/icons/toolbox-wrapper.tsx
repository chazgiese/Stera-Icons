import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ToolboxIcon as RegularToolboxIcon } from './toolbox';
import { ToolboxIconBold } from './toolbox-bold';
import { ToolboxIconFilled } from './toolbox-filled';
import { ToolboxIconFilltone } from './toolbox-filltone';
import { ToolboxIconLinetone } from './toolbox-linetone';

export interface ToolboxIconProps extends IconProps {
  variant?: IconVariant;
}

const ToolboxIcon = memo(forwardRef<SVGSVGElement, ToolboxIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ToolboxIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ToolboxIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ToolboxIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ToolboxIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularToolboxIcon ref={ref} {...props} />;
  }
}));

ToolboxIcon.displayName = 'ToolboxIcon';

export { ToolboxIcon };

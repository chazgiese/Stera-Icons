import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ToolsIcon as RegularToolsIcon } from './tools';
import { ToolsIconBold } from './tools-bold';
import { ToolsIconFilled } from './tools-filled';
import { ToolsIconFilltone } from './tools-filltone';
import { ToolsIconLinetone } from './tools-linetone';

export interface ToolsIconProps extends IconProps {
  variant?: IconVariant;
}

const ToolsIcon = memo(forwardRef<SVGSVGElement, ToolsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ToolsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ToolsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ToolsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ToolsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularToolsIcon ref={ref} {...props} />;
  }
}));

ToolsIcon.displayName = 'ToolsIcon';

export { ToolsIcon };

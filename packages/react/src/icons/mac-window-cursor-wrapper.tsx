import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MacWindowCursorIcon as RegularMacWindowCursorIcon } from './mac-window-cursor';
import { MacWindowCursorIconBold } from './mac-window-cursor-bold';
import { MacWindowCursorIconFilled } from './mac-window-cursor-filled';
import { MacWindowCursorIconFilltone } from './mac-window-cursor-filltone';
import { MacWindowCursorIconLinetone } from './mac-window-cursor-linetone';

export interface MacWindowCursorIconProps extends IconProps {
  variant?: IconVariant;
}

const MacWindowCursorIcon = memo(forwardRef<SVGSVGElement, MacWindowCursorIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MacWindowCursorIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MacWindowCursorIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MacWindowCursorIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MacWindowCursorIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMacWindowCursorIcon ref={ref} {...props} />;
  }
}));

MacWindowCursorIcon.displayName = 'MacWindowCursorIcon';

export { MacWindowCursorIcon };

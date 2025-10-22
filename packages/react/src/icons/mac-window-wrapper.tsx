import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MacWindowIcon as MacWindowIconRegular } from './mac-window';
import { MacWindowIconBold } from './mac-window-bold';
import { MacWindowIconFilled } from './mac-window-filled';
import { MacWindowIconFilltone } from './mac-window-filltone';
import { MacWindowIconLinetone } from './mac-window-linetone';

export interface MacWindowIconProps extends IconProps {
  variant?: IconVariant;
}

const MacWindowIcon = memo(forwardRef<SVGSVGElement, MacWindowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MacWindowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MacWindowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MacWindowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MacWindowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MacWindowIconRegular ref={ref} {...props} />;
  }
}));

MacWindowIcon.displayName = 'MacWindowIcon';

export { MacWindowIcon };

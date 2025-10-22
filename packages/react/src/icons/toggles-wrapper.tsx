import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TogglesIcon as RegularTogglesIcon } from './toggles';
import { TogglesIconBold } from './toggles-bold';
import { TogglesIconFilled } from './toggles-filled';
import { TogglesIconFilltone } from './toggles-filltone';
import { TogglesIconLinetone } from './toggles-linetone';

export interface TogglesIconProps extends IconProps {
  variant?: IconVariant;
}

const TogglesIcon = memo(forwardRef<SVGSVGElement, TogglesIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TogglesIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TogglesIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TogglesIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TogglesIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTogglesIcon ref={ref} {...props} />;
  }
}));

TogglesIcon.displayName = 'TogglesIcon';

export { TogglesIcon };

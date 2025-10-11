import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TogglesIcon as TogglesIconRegular } from './toggles';
import { TogglesIconBold } from './toggles-bold';
import { TogglesIconFilled } from './toggles-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TogglesIconRegular ref={ref} {...props} />;
  }
}));

TogglesIcon.displayName = 'TogglesIcon';

export { TogglesIcon };

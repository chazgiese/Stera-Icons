import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FrameIcon as RegularFrameIcon } from './frame';
import { FrameIconBold } from './frame-bold';
import { FrameIconFilled } from './frame-filled';
import { FrameIconFilltone } from './frame-filltone';
import { FrameIconLinetone } from './frame-linetone';

export interface FrameIconProps extends IconProps {
  variant?: IconVariant;
}

const FrameIcon = memo(forwardRef<SVGSVGElement, FrameIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FrameIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FrameIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FrameIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FrameIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFrameIcon ref={ref} {...props} />;
  }
}));

FrameIcon.displayName = 'FrameIcon';

export { FrameIcon };

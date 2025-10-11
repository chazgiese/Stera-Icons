import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XIcon as XIconRegular } from './x';
import { XIconBold } from './x-bold';
import { XIconFilled } from './x-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface XIconProps extends IconProps {
  variant?: IconVariant;
}

const XIcon = memo(forwardRef<SVGSVGElement, XIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <XIconFilled ref={ref} {...props} />;
    case 'bold':
      return <XIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <XIconRegular ref={ref} {...props} />;
  }
}));

XIcon.displayName = 'XIcon';

export { XIcon };

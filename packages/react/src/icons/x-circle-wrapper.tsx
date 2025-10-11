import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XCircleIcon as XCircleIconRegular } from './x-circle';
import { XCircleIconBold } from './x-circle-bold';
import { XCircleIconFilled } from './x-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface XCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const XCircleIcon = memo(forwardRef<SVGSVGElement, XCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <XCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <XCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <XCircleIconRegular ref={ref} {...props} />;
  }
}));

XCircleIcon.displayName = 'XCircleIcon';

export { XCircleIcon };

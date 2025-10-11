import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreCircleIcon as MoreCircleIconRegular } from './more-circle';
import { MoreCircleIconBold } from './more-circle-bold';
import { MoreCircleIconFilled } from './more-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MoreCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const MoreCircleIcon = memo(forwardRef<SVGSVGElement, MoreCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoreCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoreCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoreCircleIconRegular ref={ref} {...props} />;
  }
}));

MoreCircleIcon.displayName = 'MoreCircleIcon';

export { MoreCircleIcon };

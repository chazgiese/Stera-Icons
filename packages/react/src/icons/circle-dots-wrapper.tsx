import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDotsIcon as CircleDotsIconRegular } from './circle-dots';
import { CircleDotsIconBold } from './circle-dots-bold';
import { CircleDotsIconFilled } from './circle-dots-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDotsIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDotsIcon = memo(forwardRef<SVGSVGElement, CircleDotsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDotsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDotsIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDotsIconRegular ref={ref} {...props} />;
  }
}));

CircleDotsIcon.displayName = 'CircleDotsIcon';

export { CircleDotsIcon };

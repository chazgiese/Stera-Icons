import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HeartIcon as HeartIconRegular } from './heart';
import { HeartIconBold } from './heart-bold';
import { HeartIconFilled } from './heart-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HeartIconProps extends IconProps {
  variant?: IconVariant;
}

const HeartIcon = memo(forwardRef<SVGSVGElement, HeartIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HeartIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HeartIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HeartIconRegular ref={ref} {...props} />;
  }
}));

HeartIcon.displayName = 'HeartIcon';

export { HeartIcon };

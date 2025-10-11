import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleFourPlusIcon as CircleFourPlusIconRegular } from './circle-four-plus';
import { CircleFourPlusIconBold } from './circle-four-plus-bold';
import { CircleFourPlusIconFilled } from './circle-four-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleFourPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleFourPlusIcon = memo(forwardRef<SVGSVGElement, CircleFourPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleFourPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleFourPlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleFourPlusIconRegular ref={ref} {...props} />;
  }
}));

CircleFourPlusIcon.displayName = 'CircleFourPlusIcon';

export { CircleFourPlusIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleFourPlusIcon as RegularCircleFourPlusIcon } from './circle-four-plus';
import { CircleFourPlusIconBold } from './circle-four-plus-bold';
import { CircleFourPlusIconFilled } from './circle-four-plus-filled';
import { CircleFourPlusIconFilltone } from './circle-four-plus-filltone';
import { CircleFourPlusIconLinetone } from './circle-four-plus-linetone';

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
    case 'filltone':
      return <CircleFourPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleFourPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleFourPlusIcon ref={ref} {...props} />;
  }
}));

CircleFourPlusIcon.displayName = 'CircleFourPlusIcon';

export { CircleFourPlusIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDivideAltIcon as CircleDivideAltIconRegular } from './circle-divide-alt';
import { CircleDivideAltIconBold } from './circle-divide-alt-bold';
import { CircleDivideAltIconFilled } from './circle-divide-alt-filled';
import { CircleDivideAltIconFilltone } from './circle-divide-alt-filltone';
import { CircleDivideAltIconLinetone } from './circle-divide-alt-linetone';

export interface CircleDivideAltIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDivideAltIcon = memo(forwardRef<SVGSVGElement, CircleDivideAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDivideAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDivideAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleDivideAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDivideAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDivideAltIconRegular ref={ref} {...props} />;
  }
}));

CircleDivideAltIcon.displayName = 'CircleDivideAltIcon';

export { CircleDivideAltIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CirclesThreeIcon as CirclesThreeIconRegular } from './circles-three';
import { CirclesThreeIconBold } from './circles-three-bold';
import { CirclesThreeIconFilled } from './circles-three-filled';
import { CirclesThreeIconFilltone } from './circles-three-filltone';
import { CirclesThreeIconLinetone } from './circles-three-linetone';

export interface CirclesThreeIconProps extends IconProps {
  variant?: IconVariant;
}

const CirclesThreeIcon = memo(forwardRef<SVGSVGElement, CirclesThreeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CirclesThreeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CirclesThreeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CirclesThreeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CirclesThreeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CirclesThreeIconRegular ref={ref} {...props} />;
  }
}));

CirclesThreeIcon.displayName = 'CirclesThreeIcon';

export { CirclesThreeIcon };

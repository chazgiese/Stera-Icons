import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleFourConnectedIcon as CircleFourConnectedIconRegular } from './circle-four-connected';
import { CircleFourConnectedIconBold } from './circle-four-connected-bold';
import { CircleFourConnectedIconFilled } from './circle-four-connected-filled';
import { CircleFourConnectedIconFilltone } from './circle-four-connected-filltone';
import { CircleFourConnectedIconLinetone } from './circle-four-connected-linetone';

export interface CircleFourConnectedIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleFourConnectedIcon = memo(forwardRef<SVGSVGElement, CircleFourConnectedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleFourConnectedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleFourConnectedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleFourConnectedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleFourConnectedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleFourConnectedIconRegular ref={ref} {...props} />;
  }
}));

CircleFourConnectedIcon.displayName = 'CircleFourConnectedIcon';

export { CircleFourConnectedIcon };

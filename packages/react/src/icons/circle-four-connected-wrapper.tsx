import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleFourConnectedIcon as CircleFourConnectedIconRegular } from './circle-four-connected';
import { CircleFourConnectedIconBold } from './circle-four-connected-bold';
import { CircleFourConnectedIconFilled } from './circle-four-connected-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CircleFourConnectedIconRegular ref={ref} {...props} />;
  }
}));

CircleFourConnectedIcon.displayName = 'CircleFourConnectedIcon';

export { CircleFourConnectedIcon };

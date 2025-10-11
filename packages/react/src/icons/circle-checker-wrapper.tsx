import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleCheckerIcon as CircleCheckerIconRegular } from './circle-checker';
import { CircleCheckerIconBold } from './circle-checker-bold';
import { CircleCheckerIconFilled } from './circle-checker-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleCheckerIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleCheckerIcon = memo(forwardRef<SVGSVGElement, CircleCheckerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleCheckerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleCheckerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleCheckerIconRegular ref={ref} {...props} />;
  }
}));

CircleCheckerIcon.displayName = 'CircleCheckerIcon';

export { CircleCheckerIcon };

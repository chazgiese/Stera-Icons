import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleContrastIcon as CircleContrastIconRegular } from './circle-contrast';
import { CircleContrastIconBold } from './circle-contrast-bold';
import { CircleContrastIconFilled } from './circle-contrast-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleContrastIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleContrastIcon = memo(forwardRef<SVGSVGElement, CircleContrastIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleContrastIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleContrastIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleContrastIconRegular ref={ref} {...props} />;
  }
}));

CircleContrastIcon.displayName = 'CircleContrastIcon';

export { CircleContrastIcon };

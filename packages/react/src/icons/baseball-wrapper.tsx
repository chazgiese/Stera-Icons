import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BaseballIcon as BaseballIconRegular } from './baseball';
import { BaseballIconBold } from './baseball-bold';
import { BaseballIconFilled } from './baseball-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BaseballIconProps extends IconProps {
  variant?: IconVariant;
}

const BaseballIcon = memo(forwardRef<SVGSVGElement, BaseballIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BaseballIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BaseballIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BaseballIconRegular ref={ref} {...props} />;
  }
}));

BaseballIcon.displayName = 'BaseballIcon';

export { BaseballIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RocketIcon as RocketIconRegular } from './rocket';
import { RocketIconBold } from './rocket-bold';
import { RocketIconFilled } from './rocket-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface RocketIconProps extends IconProps {
  variant?: IconVariant;
}

const RocketIcon = memo(forwardRef<SVGSVGElement, RocketIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RocketIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RocketIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <RocketIconRegular ref={ref} {...props} />;
  }
}));

RocketIcon.displayName = 'RocketIcon';

export { RocketIcon };

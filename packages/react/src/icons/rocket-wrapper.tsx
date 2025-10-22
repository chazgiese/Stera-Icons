import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RocketIcon as RocketIconRegular } from './rocket';
import { RocketIconBold } from './rocket-bold';
import { RocketIconFilled } from './rocket-filled';
import { RocketIconFilltone } from './rocket-filltone';
import { RocketIconLinetone } from './rocket-linetone';

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
    case 'filltone':
      return <RocketIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RocketIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RocketIconRegular ref={ref} {...props} />;
  }
}));

RocketIcon.displayName = 'RocketIcon';

export { RocketIcon };

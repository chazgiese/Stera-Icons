import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleSlashIcon as RegularCircleSlashIcon } from './circle-slash';
import { CircleSlashIconBold } from './circle-slash-bold';
import { CircleSlashIconFilled } from './circle-slash-filled';
import { CircleSlashIconFilltone } from './circle-slash-filltone';
import { CircleSlashIconLinetone } from './circle-slash-linetone';

export interface CircleSlashIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleSlashIcon = memo(forwardRef<SVGSVGElement, CircleSlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleSlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleSlashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CircleSlashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleSlashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleSlashIcon ref={ref} {...props} />;
  }
}));

CircleSlashIcon.displayName = 'CircleSlashIcon';

export { CircleSlashIcon };

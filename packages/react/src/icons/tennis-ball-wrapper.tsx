import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TennisBallIcon as TennisBallIconRegular } from './tennis-ball';
import { TennisBallIconBold } from './tennis-ball-bold';
import { TennisBallIconFilled } from './tennis-ball-filled';
import { TennisBallIconFilltone } from './tennis-ball-filltone';
import { TennisBallIconLinetone } from './tennis-ball-linetone';

export interface TennisBallIconProps extends IconProps {
  variant?: IconVariant;
}

const TennisBallIcon = memo(forwardRef<SVGSVGElement, TennisBallIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TennisBallIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TennisBallIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TennisBallIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TennisBallIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TennisBallIconRegular ref={ref} {...props} />;
  }
}));

TennisBallIcon.displayName = 'TennisBallIcon';

export { TennisBallIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MoveIcon as MoveIconRegular } from './move';
import { MoveIconBold } from './move-bold';
import { MoveIconFilled } from './move-filled';
import { MoveIconFilltone } from './move-filltone';
import { MoveIconLinetone } from './move-linetone';

export interface MoveIconProps extends IconProps {
  variant?: IconVariant;
}

const MoveIcon = memo(forwardRef<SVGSVGElement, MoveIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MoveIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MoveIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MoveIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MoveIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <MoveIconRegular ref={ref} {...props} />;
  }
}));

MoveIcon.displayName = 'MoveIcon';

export { MoveIcon };

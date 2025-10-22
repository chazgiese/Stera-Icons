import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FortressIcon as RegularFortressIcon } from './fortress';
import { FortressIconBold } from './fortress-bold';
import { FortressIconFilled } from './fortress-filled';
import { FortressIconFilltone } from './fortress-filltone';
import { FortressIconLinetone } from './fortress-linetone';

export interface FortressIconProps extends IconProps {
  variant?: IconVariant;
}

const FortressIcon = memo(forwardRef<SVGSVGElement, FortressIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FortressIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FortressIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FortressIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FortressIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFortressIcon ref={ref} {...props} />;
  }
}));

FortressIcon.displayName = 'FortressIcon';

export { FortressIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PenIcon as RegularPenIcon } from './pen';
import { PenIconBold } from './pen-bold';
import { PenIconFilled } from './pen-filled';
import { PenIconFilltone } from './pen-filltone';
import { PenIconLinetone } from './pen-linetone';

export interface PenIconProps extends IconProps {
  variant?: IconVariant;
}

const PenIcon = memo(forwardRef<SVGSVGElement, PenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPenIcon ref={ref} {...props} />;
  }
}));

PenIcon.displayName = 'PenIcon';

export { PenIcon };

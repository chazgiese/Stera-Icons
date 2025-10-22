import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CanIcon as CanIconRegular } from './can';
import { CanIconBold } from './can-bold';
import { CanIconFilled } from './can-filled';
import { CanIconFilltone } from './can-filltone';
import { CanIconLinetone } from './can-linetone';

export interface CanIconProps extends IconProps {
  variant?: IconVariant;
}

const CanIcon = memo(forwardRef<SVGSVGElement, CanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CanIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CanIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CanIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CanIconRegular ref={ref} {...props} />;
  }
}));

CanIcon.displayName = 'CanIcon';

export { CanIcon };

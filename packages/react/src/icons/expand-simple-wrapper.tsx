import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ExpandSimpleIcon as RegularExpandSimpleIcon } from './expand-simple';
import { ExpandSimpleIconBold } from './expand-simple-bold';
import { ExpandSimpleIconFilled } from './expand-simple-filled';
import { ExpandSimpleIconFilltone } from './expand-simple-filltone';
import { ExpandSimpleIconLinetone } from './expand-simple-linetone';

export interface ExpandSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const ExpandSimpleIcon = memo(forwardRef<SVGSVGElement, ExpandSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ExpandSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ExpandSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ExpandSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ExpandSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularExpandSimpleIcon ref={ref} {...props} />;
  }
}));

ExpandSimpleIcon.displayName = 'ExpandSimpleIcon';

export { ExpandSimpleIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ExpandIcon as RegularExpandIcon } from './expand';
import { ExpandIconBold } from './expand-bold';
import { ExpandIconFilled } from './expand-filled';
import { ExpandIconFilltone } from './expand-filltone';
import { ExpandIconLinetone } from './expand-linetone';

export interface ExpandIconProps extends IconProps {
  variant?: IconVariant;
}

const ExpandIcon = memo(forwardRef<SVGSVGElement, ExpandIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ExpandIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ExpandIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ExpandIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ExpandIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularExpandIcon ref={ref} {...props} />;
  }
}));

ExpandIcon.displayName = 'ExpandIcon';

export { ExpandIcon };

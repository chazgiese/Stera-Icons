import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CollapseIcon as RegularCollapseIcon } from './collapse';
import { CollapseIconBold } from './collapse-bold';
import { CollapseIconFilled } from './collapse-filled';
import { CollapseIconFilltone } from './collapse-filltone';
import { CollapseIconLinetone } from './collapse-linetone';

export interface CollapseIconProps extends IconProps {
  variant?: IconVariant;
}

const CollapseIcon = memo(forwardRef<SVGSVGElement, CollapseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CollapseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CollapseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CollapseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CollapseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCollapseIcon ref={ref} {...props} />;
  }
}));

CollapseIcon.displayName = 'CollapseIcon';

export { CollapseIcon };

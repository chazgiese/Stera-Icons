import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CollapseSimpleIcon as RegularCollapseSimpleIcon } from './collapse-simple';
import { CollapseSimpleIconBold } from './collapse-simple-bold';
import { CollapseSimpleIconFilled } from './collapse-simple-filled';
import { CollapseSimpleIconFilltone } from './collapse-simple-filltone';
import { CollapseSimpleIconLinetone } from './collapse-simple-linetone';

export interface CollapseSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const CollapseSimpleIcon = memo(forwardRef<SVGSVGElement, CollapseSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CollapseSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CollapseSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CollapseSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CollapseSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCollapseSimpleIcon ref={ref} {...props} />;
  }
}));

CollapseSimpleIcon.displayName = 'CollapseSimpleIcon';

export { CollapseSimpleIcon };

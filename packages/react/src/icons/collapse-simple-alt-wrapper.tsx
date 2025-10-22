import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CollapseSimpleAltIcon as RegularCollapseSimpleAltIcon } from './collapse-simple-alt';
import { CollapseSimpleAltIconBold } from './collapse-simple-alt-bold';
import { CollapseSimpleAltIconFilled } from './collapse-simple-alt-filled';
import { CollapseSimpleAltIconFilltone } from './collapse-simple-alt-filltone';
import { CollapseSimpleAltIconLinetone } from './collapse-simple-alt-linetone';

export interface CollapseSimpleAltIconProps extends IconProps {
  variant?: IconVariant;
}

const CollapseSimpleAltIcon = memo(forwardRef<SVGSVGElement, CollapseSimpleAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CollapseSimpleAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CollapseSimpleAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CollapseSimpleAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CollapseSimpleAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCollapseSimpleAltIcon ref={ref} {...props} />;
  }
}));

CollapseSimpleAltIcon.displayName = 'CollapseSimpleAltIcon';

export { CollapseSimpleAltIcon };

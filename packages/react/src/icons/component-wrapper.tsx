import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ComponentIcon as RegularComponentIcon } from './component';
import { ComponentIconBold } from './component-bold';
import { ComponentIconFilled } from './component-filled';
import { ComponentIconFilltone } from './component-filltone';
import { ComponentIconLinetone } from './component-linetone';

export interface ComponentIconProps extends IconProps {
  variant?: IconVariant;
}

const ComponentIcon = memo(forwardRef<SVGSVGElement, ComponentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ComponentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ComponentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ComponentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ComponentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularComponentIcon ref={ref} {...props} />;
  }
}));

ComponentIcon.displayName = 'ComponentIcon';

export { ComponentIcon };

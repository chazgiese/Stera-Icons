import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ComponentIcon as ComponentIconRegular } from './component';
import { ComponentIconBold } from './component-bold';
import { ComponentIconFilled } from './component-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ComponentIconRegular ref={ref} {...props} />;
  }
}));

ComponentIcon.displayName = 'ComponentIcon';

export { ComponentIcon };

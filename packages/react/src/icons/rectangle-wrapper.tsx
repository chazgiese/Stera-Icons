import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RectangleIcon as RegularRectangleIcon } from './rectangle';
import { RectangleIconBold } from './rectangle-bold';
import { RectangleIconFilled } from './rectangle-filled';
import { RectangleIconFilltone } from './rectangle-filltone';
import { RectangleIconLinetone } from './rectangle-linetone';

export interface RectangleIconProps extends IconProps {
  variant?: IconVariant;
}

const RectangleIcon = memo(forwardRef<SVGSVGElement, RectangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RectangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RectangleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RectangleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RectangleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRectangleIcon ref={ref} {...props} />;
  }
}));

RectangleIcon.displayName = 'RectangleIcon';

export { RectangleIcon };

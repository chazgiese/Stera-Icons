import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TriangleDownIcon as TriangleDownIconRegular } from './triangle-down';
import { TriangleDownIconBold } from './triangle-down-bold';
import { TriangleDownIconFilled } from './triangle-down-filled';
import { TriangleDownIconFilltone } from './triangle-down-filltone';
import { TriangleDownIconLinetone } from './triangle-down-linetone';

export interface TriangleDownIconProps extends IconProps {
  variant?: IconVariant;
}

const TriangleDownIcon = memo(forwardRef<SVGSVGElement, TriangleDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TriangleDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TriangleDownIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TriangleDownIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TriangleDownIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TriangleDownIconRegular ref={ref} {...props} />;
  }
}));

TriangleDownIcon.displayName = 'TriangleDownIcon';

export { TriangleDownIcon };

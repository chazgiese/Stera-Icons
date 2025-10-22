import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TriangleIcon as TriangleIconRegular } from './triangle';
import { TriangleIconBold } from './triangle-bold';
import { TriangleIconFilled } from './triangle-filled';
import { TriangleIconFilltone } from './triangle-filltone';
import { TriangleIconLinetone } from './triangle-linetone';

export interface TriangleIconProps extends IconProps {
  variant?: IconVariant;
}

const TriangleIcon = memo(forwardRef<SVGSVGElement, TriangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TriangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TriangleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TriangleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TriangleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <TriangleIconRegular ref={ref} {...props} />;
  }
}));

TriangleIcon.displayName = 'TriangleIcon';

export { TriangleIcon };

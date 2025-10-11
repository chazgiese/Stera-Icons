import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TriangleIcon as TriangleIconRegular } from './triangle';
import { TriangleIconBold } from './triangle-bold';
import { TriangleIconFilled } from './triangle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TriangleIconRegular ref={ref} {...props} />;
  }
}));

TriangleIcon.displayName = 'TriangleIcon';

export { TriangleIcon };

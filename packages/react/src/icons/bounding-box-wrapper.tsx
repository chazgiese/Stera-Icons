import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BoundingBoxIcon as RegularBoundingBoxIcon } from './bounding-box';
import { BoundingBoxIconBold } from './bounding-box-bold';
import { BoundingBoxIconFilled } from './bounding-box-filled';
import { BoundingBoxIconFilltone } from './bounding-box-filltone';
import { BoundingBoxIconLinetone } from './bounding-box-linetone';

export interface BoundingBoxIconProps extends IconProps {
  variant?: IconVariant;
}

const BoundingBoxIcon = memo(forwardRef<SVGSVGElement, BoundingBoxIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BoundingBoxIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BoundingBoxIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BoundingBoxIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BoundingBoxIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBoundingBoxIcon ref={ref} {...props} />;
  }
}));

BoundingBoxIcon.displayName = 'BoundingBoxIcon';

export { BoundingBoxIcon };

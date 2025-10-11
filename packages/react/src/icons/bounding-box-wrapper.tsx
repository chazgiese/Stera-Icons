import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoundingBoxIcon as BoundingBoxIconRegular } from './bounding-box';
import { BoundingBoxIconBold } from './bounding-box-bold';
import { BoundingBoxIconFilled } from './bounding-box-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <BoundingBoxIconRegular ref={ref} {...props} />;
  }
}));

BoundingBoxIcon.displayName = 'BoundingBoxIcon';

export { BoundingBoxIcon };

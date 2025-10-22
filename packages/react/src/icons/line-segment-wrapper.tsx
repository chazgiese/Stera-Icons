import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineSegmentIcon as LineSegmentIconRegular } from './line-segment';
import { LineSegmentIconBold } from './line-segment-bold';
import { LineSegmentIconFilled } from './line-segment-filled';
import { LineSegmentIconFilltone } from './line-segment-filltone';
import { LineSegmentIconLinetone } from './line-segment-linetone';

export interface LineSegmentIconProps extends IconProps {
  variant?: IconVariant;
}

const LineSegmentIcon = memo(forwardRef<SVGSVGElement, LineSegmentIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineSegmentIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineSegmentIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineSegmentIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineSegmentIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineSegmentIconRegular ref={ref} {...props} />;
  }
}));

LineSegmentIcon.displayName = 'LineSegmentIcon';

export { LineSegmentIcon };

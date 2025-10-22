import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineSegmentHIcon as LineSegmentHIconRegular } from './line-segment-h';
import { LineSegmentHIconBold } from './line-segment-h-bold';
import { LineSegmentHIconFilled } from './line-segment-h-filled';
import { LineSegmentHIconFilltone } from './line-segment-h-filltone';
import { LineSegmentHIconLinetone } from './line-segment-h-linetone';

export interface LineSegmentHIconProps extends IconProps {
  variant?: IconVariant;
}

const LineSegmentHIcon = memo(forwardRef<SVGSVGElement, LineSegmentHIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineSegmentHIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineSegmentHIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LineSegmentHIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineSegmentHIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineSegmentHIconRegular ref={ref} {...props} />;
  }
}));

LineSegmentHIcon.displayName = 'LineSegmentHIcon';

export { LineSegmentHIcon };

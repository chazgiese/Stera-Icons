import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentHIcon as LineSegmentHIconRegular } from './line-segment-h';
import { LineSegmentHIconBold } from './line-segment-h-bold';
import { LineSegmentHIconFilled } from './line-segment-h-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineSegmentHIconRegular ref={ref} {...props} />;
  }
}));

LineSegmentHIcon.displayName = 'LineSegmentHIcon';

export { LineSegmentHIcon };

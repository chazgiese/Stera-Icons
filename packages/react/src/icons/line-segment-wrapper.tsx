import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentIcon as LineSegmentIconRegular } from './line-segment';
import { LineSegmentIconBold } from './line-segment-bold';
import { LineSegmentIconFilled } from './line-segment-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <LineSegmentIconRegular ref={ref} {...props} />;
  }
}));

LineSegmentIcon.displayName = 'LineSegmentIcon';

export { LineSegmentIcon };

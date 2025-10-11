import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentVIcon as LineSegmentVIconRegular } from './line-segment-v';
import { LineSegmentVIconBold } from './line-segment-v-bold';
import { LineSegmentVIconFilled } from './line-segment-v-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LineSegmentVIconProps extends IconProps {
  variant?: IconVariant;
}

const LineSegmentVIcon = memo(forwardRef<SVGSVGElement, LineSegmentVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LineSegmentVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LineSegmentVIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LineSegmentVIconRegular ref={ref} {...props} />;
  }
}));

LineSegmentVIcon.displayName = 'LineSegmentVIcon';

export { LineSegmentVIcon };

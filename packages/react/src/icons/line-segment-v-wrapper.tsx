import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LineSegmentVIcon as RegularLineSegmentVIcon } from './line-segment-v';
import { LineSegmentVIconBold } from './line-segment-v-bold';
import { LineSegmentVIconFilled } from './line-segment-v-filled';
import { LineSegmentVIconFilltone } from './line-segment-v-filltone';
import { LineSegmentVIconLinetone } from './line-segment-v-linetone';

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
    case 'filltone':
      return <LineSegmentVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LineSegmentVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLineSegmentVIcon ref={ref} {...props} />;
  }
}));

LineSegmentVIcon.displayName = 'LineSegmentVIcon';

export { LineSegmentVIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentVIcon as RegularLineSegmentVIcon } from './line-segment-v';
import { LineSegmentVIconDuotone as LineSegmentVIconDuotone } from './line-segment-v-duotone';
import { LineSegmentVIconBold as LineSegmentVIconBold } from './line-segment-v-bold';
import { LineSegmentVIconBoldDuotone as LineSegmentVIconBoldDuotone } from './line-segment-v-bold-duotone';
import { LineSegmentVIconFill as LineSegmentVIconFill } from './line-segment-v-fill';
import { LineSegmentVIconFillDuotone as LineSegmentVIconFillDuotone } from './line-segment-v-fill-duotone';

export interface LineSegmentVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LineSegmentVIcon = memo(forwardRef<SVGSVGElement, LineSegmentVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LineSegmentVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LineSegmentVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LineSegmentVIconFill ref={ref} {...props} />;
  if (duotone) return <LineSegmentVIconDuotone ref={ref} {...props} />;
  return <RegularLineSegmentVIcon ref={ref} {...props} />;
}));

LineSegmentVIcon.displayName = 'LineSegmentVIcon';

export { LineSegmentVIcon };

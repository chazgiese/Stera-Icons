import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentIcon as RegularLineSegmentIcon } from './line-segment';
import { LineSegmentIconDuotone as LineSegmentIconDuotone } from './line-segment-duotone';
import { LineSegmentIconBold as LineSegmentIconBold } from './line-segment-bold';
import { LineSegmentIconBoldDuotone as LineSegmentIconBoldDuotone } from './line-segment-bold-duotone';
import { LineSegmentIconFill as LineSegmentIconFill } from './line-segment-fill';
import { LineSegmentIconFillDuotone as LineSegmentIconFillDuotone } from './line-segment-fill-duotone';

export interface LineSegmentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LineSegmentIcon = memo(forwardRef<SVGSVGElement, LineSegmentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LineSegmentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LineSegmentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LineSegmentIconFill ref={ref} {...props} />;
  if (duotone) return <LineSegmentIconDuotone ref={ref} {...props} />;
  return <RegularLineSegmentIcon ref={ref} {...props} />;
}));

LineSegmentIcon.displayName = 'LineSegmentIcon';

export { LineSegmentIcon };

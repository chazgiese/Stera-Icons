import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LineSegmentHIcon as RegularLineSegmentHIcon } from './line-segment-h';
import { LineSegmentHIconDuotone as LineSegmentHIconDuotone } from './line-segment-h-duotone';
import { LineSegmentHIconBold as LineSegmentHIconBold } from './line-segment-h-bold';
import { LineSegmentHIconBoldDuotone as LineSegmentHIconBoldDuotone } from './line-segment-h-bold-duotone';
import { LineSegmentHIconFill as LineSegmentHIconFill } from './line-segment-h-fill';
import { LineSegmentHIconFillDuotone as LineSegmentHIconFillDuotone } from './line-segment-h-fill-duotone';

export interface LineSegmentHIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LineSegmentHIcon = memo(forwardRef<SVGSVGElement, LineSegmentHIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LineSegmentHIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LineSegmentHIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LineSegmentHIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LineSegmentHIconFill ref={ref} {...props} />;
  if (duotone) return <LineSegmentHIconDuotone ref={ref} {...props} />;
  return <RegularLineSegmentHIcon ref={ref} {...props} />;
}));

LineSegmentHIcon.displayName = 'LineSegmentHIcon';

export { LineSegmentHIcon };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFill = memo(
  forwardRef<SVGSVGElement, LineSegmentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-fill" {...props}>
      <path fill="currentColor" d="M18.5 2a3.5 3.5 0 1 1-1.66 6.58l-8.26 8.26q.41.75.42 1.66a3.5 3.5 0 1 1-1.84-3.08l8.26-8.26A3.5 3.5 0 0 1 18.5 2" />
    </IconBase>
  ))
);

LineSegmentFill.displayName = 'LineSegmentFill';

// Triple export pattern (lucide-react style)
export { LineSegmentFill, LineSegmentFill as LineSegmentFillIcon, LineSegmentFill as SiLineSegmentFill };
export default LineSegmentFill;
export type { LineSegmentFillProps };

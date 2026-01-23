import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBold = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 2a3.5 3.5 0 1 1-1.66 6.58l-8.26 8.26q.41.75.42 1.66a3.5 3.5 0 1 1-1.84-3.08l8.26-8.26A3.5 3.5 0 0 1 18.5 2m-13 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13-13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBold.displayName = 'LineSegmentBold';

// Triple export pattern (lucide-react style)
export { LineSegmentBold, LineSegmentBold as LineSegmentBoldIcon, LineSegmentBold as SiLineSegmentBold };
export default LineSegmentBold;
export type { LineSegmentBoldProps };

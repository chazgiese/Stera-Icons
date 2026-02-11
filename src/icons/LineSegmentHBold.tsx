import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBold = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-h-bold" {...props}>
      <path fillRule="evenodd" d="M19.5 8.5a3.5 3.5 0 1 1-3.35 4.5h-8.3a3.5 3.5 0 1 1 0-2h8.3a3.5 3.5 0 0 1 3.35-2.5m-15 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m15 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBold.displayName = 'LineSegmentHBold';

// Triple export pattern (lucide-react style)
export { LineSegmentHBold, LineSegmentHBold as LineSegmentHBoldIcon, LineSegmentHBold as SiLineSegmentHBold };
export default LineSegmentHBold;
export type { LineSegmentHBoldProps };

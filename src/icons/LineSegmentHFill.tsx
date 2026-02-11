import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFill = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-h-fill" {...props}>
      <path d="M19.5 8.5a3.5 3.5 0 1 1-3.35 4.5h-8.3a3.5 3.5 0 1 1 0-2h8.3a3.5 3.5 0 0 1 3.35-2.5" />
    </IconBase>
  ))
);

LineSegmentHFill.displayName = 'LineSegmentHFill';

// Triple export pattern (lucide-react style)
export { LineSegmentHFill, LineSegmentHFill as LineSegmentHFillIcon, LineSegmentHFill as SiLineSegmentHFill };
export default LineSegmentHFill;
export type { LineSegmentHFillProps };

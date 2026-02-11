import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFill = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-fill" {...props}>
      <path d="M12 1a3.5 3.5 0 0 1 1 6.85v8.3a3.5 3.5 0 1 1-2 0v-8.3A3.5 3.5 0 0 1 12 1" />
    </IconBase>
  ))
);

LineSegmentVFill.displayName = 'LineSegmentVFill';

// Triple export pattern (lucide-react style)
export { LineSegmentVFill, LineSegmentVFill as LineSegmentVFillIcon, LineSegmentVFill as SiLineSegmentVFill };
export default LineSegmentVFill;
export type { LineSegmentVFillProps };

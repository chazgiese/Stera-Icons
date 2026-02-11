import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-h-fill-duotone" {...props}>
      <path d="M16.15 11a3.5 3.5 0 0 0 0 2h-8.3a3.5 3.5 0 0 0 0-2z" opacity={.4} />
        <path d="M4.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M19.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

LineSegmentHFillDuotone.displayName = 'LineSegmentHFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHFillDuotone, LineSegmentHFillDuotone as LineSegmentHFillDuotoneIcon, LineSegmentHFillDuotone as SiLineSegmentHFillDuotone };
export default LineSegmentHFillDuotone;
export type { LineSegmentHFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 16.15a3.5 3.5 0 0 0-2 0v-8.3a3.5 3.5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 16a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBoldDuotone.displayName = 'LineSegmentVBoldDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVBoldDuotone, LineSegmentVBoldDuotone as LineSegmentVBoldDuotoneIcon, LineSegmentVBoldDuotone as SiLineSegmentVBoldDuotone };
export default LineSegmentVBoldDuotone;
export type { LineSegmentVBoldDuotoneProps };

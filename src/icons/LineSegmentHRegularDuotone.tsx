import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-h-duotone" {...props}>
      <path fill="currentColor" d="M16.34 11.25a3 3 0 0 0 0 1.5H7.66a3 3 0 0 0 0-1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.5 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M19.5 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegularDuotone.displayName = 'LineSegmentHRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHRegularDuotone, LineSegmentHRegularDuotone as LineSegmentHRegularDuotoneIcon, LineSegmentHRegularDuotone as SiLineSegmentHRegularDuotone };
export default LineSegmentHRegularDuotone;
export type { LineSegmentHRegularDuotoneProps };

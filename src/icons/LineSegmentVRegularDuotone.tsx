import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 16.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M12 1.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12.75 16.34a3 3 0 0 0-1.5 0V7.66a3 3 0 0 0 1.5 0z" opacity={.4} />
    </IconBase>
  ))
);

LineSegmentVRegularDuotone.displayName = 'LineSegmentVRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVRegularDuotone, LineSegmentVRegularDuotone as LineSegmentVRegularDuotoneIcon, LineSegmentVRegularDuotone as SiLineSegmentVRegularDuotone };
export default LineSegmentVRegularDuotone;
export type { LineSegmentVRegularDuotoneProps };

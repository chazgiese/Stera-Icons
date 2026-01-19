import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentVRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.25 3.25 0 0 1 .75 6.41v8.68a3.25 3.25 0 1 1-1.5 0V7.66A3.25 3.25 0 0 1 12 1.25m0 16.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVRegular.displayName = 'LineSegmentVRegular';

// Triple export pattern (lucide-react style)
export { LineSegmentVRegular, LineSegmentVRegular as LineSegmentVRegularIcon, LineSegmentVRegular as SiLineSegmentVRegular };
export default LineSegmentVRegular;
export type { LineSegmentVRegularProps };

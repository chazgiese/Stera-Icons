import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.5 2.25a3.25 3.25 0 1 1-1.7 6.02l-8.53 8.52q.46.76.48 1.71a3.25 3.25 0 1 1-1.54-2.77l8.52-8.52q-.46-.76-.48-1.71c0-1.8 1.46-3.25 3.25-3.25m-13 14.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m13-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegular.displayName = 'LineSegmentRegular';

// Triple export pattern (lucide-react style)
export { LineSegmentRegular, LineSegmentRegular as LineSegmentRegularIcon, LineSegmentRegular as SiLineSegmentRegular };
export default LineSegmentRegular;
export type { LineSegmentRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-h-bold-duotone" {...props}>
      <path fill="currentColor" d="M16.15 11a3.5 3.5 0 0 0 0 2h-8.3a3.5 3.5 0 0 0 0-2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBoldDuotone.displayName = 'LineSegmentHBoldDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentHBoldDuotone, LineSegmentHBoldDuotone as LineSegmentHBoldDuotoneIcon, LineSegmentHBoldDuotone as SiLineSegmentHBoldDuotone };
export default LineSegmentHBoldDuotone;
export type { LineSegmentHBoldDuotoneProps };

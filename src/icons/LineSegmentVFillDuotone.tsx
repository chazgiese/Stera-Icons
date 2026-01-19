import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-v-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 16.15a3.5 3.5 0 0 0-2 0v-8.3a3.5 3.5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M12 16a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M12 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

LineSegmentVFillDuotone.displayName = 'LineSegmentVFillDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentVFillDuotone, LineSegmentVFillDuotone as LineSegmentVFillDuotoneIcon, LineSegmentVFillDuotone as SiLineSegmentVFillDuotone };
export type { LineSegmentVFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentFillDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.42 7.16c.32.6.82 1.1 1.42 1.42l-8.26 8.26a3.5 3.5 0 0 0-1.42-1.42z" opacity={.4} />
        <path fill="currentColor" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

LineSegmentFillDuotone.displayName = 'LineSegmentFillDuotone';

export { LineSegmentFillDuotone };
export type { LineSegmentFillDuotoneProps };

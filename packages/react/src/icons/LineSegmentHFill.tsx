import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentHFillProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHFill = memo(
  forwardRef<SVGSVGElement, LineSegmentHFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.5 8.5a3.5 3.5 0 1 1-3.35 4.5h-8.3a3.5 3.5 0 1 1 0-2h8.3a3.5 3.5 0 0 1 3.35-2.5" />
    </IconBase>
  ))
);

LineSegmentHFill.displayName = 'LineSegmentHFill';

export { LineSegmentHFill };
export type { LineSegmentHFillProps };

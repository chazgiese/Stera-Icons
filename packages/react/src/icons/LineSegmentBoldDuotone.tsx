import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.42 7.16c.32.6.82 1.1 1.42 1.42l-8.26 8.26a3.5 3.5 0 0 0-1.42-1.42z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentBoldDuotone.displayName = 'LineSegmentBoldDuotone';

export { LineSegmentBoldDuotone };
export type { LineSegmentBoldDuotoneProps };

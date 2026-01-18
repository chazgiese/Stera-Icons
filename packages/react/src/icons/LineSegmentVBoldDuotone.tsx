import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBoldDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 16.15a3.5 3.5 0 0 0-2 0v-8.3a3.5 3.5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 16a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBoldDuotone.displayName = 'LineSegmentVBoldDuotone';

export { LineSegmentVBoldDuotone };
export type { LineSegmentVBoldDuotoneProps };

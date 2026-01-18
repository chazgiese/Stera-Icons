import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentVBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentVBold = memo(
  forwardRef<SVGSVGElement, LineSegmentVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a3.5 3.5 0 0 1 1 6.85v8.3a3.5 3.5 0 1 1-2 0v-8.3A3.5 3.5 0 0 1 12 1m0 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentVBold.displayName = 'LineSegmentVBold';

export { LineSegmentVBold };
export type { LineSegmentVBoldProps };

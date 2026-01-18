import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentHBoldProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHBold = memo(
  forwardRef<SVGSVGElement, LineSegmentHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.5 8.5a3.5 3.5 0 1 1-3.35 4.5h-8.3a3.5 3.5 0 1 1 0-2h8.3a3.5 3.5 0 0 1 3.35-2.5m-15 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m15 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHBold.displayName = 'LineSegmentHBold';

export { LineSegmentHBold };
export type { LineSegmentHBoldProps };

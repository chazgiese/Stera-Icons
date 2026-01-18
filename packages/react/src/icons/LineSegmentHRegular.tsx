import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentHRegularProps = Omit<IconBaseProps, 'children'>;

const LineSegmentHRegular = memo(
  forwardRef<SVGSVGElement, LineSegmentHRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.5 8.75a3.25 3.25 0 1 1-3.16 4H7.66a3.25 3.25 0 1 1 0-1.5h8.68a3.25 3.25 0 0 1 3.16-2.5m-15 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m15 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentHRegular.displayName = 'LineSegmentHRegular';

export { LineSegmentHRegular };
export type { LineSegmentHRegularProps };

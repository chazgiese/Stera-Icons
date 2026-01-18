import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineSegmentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.73 7.2q.41.66 1.06 1.07l-8.52 8.52q-.41-.65-1.06-1.06z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegularDuotone.displayName = 'LineSegmentRegularDuotone';

export { LineSegmentRegularDuotone };
export type { LineSegmentRegularDuotoneProps };

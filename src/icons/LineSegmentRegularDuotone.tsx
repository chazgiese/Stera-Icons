import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineSegmentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineSegmentRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineSegmentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-segment-duotone" {...props}>
      <path d="M15.73 7.2q.41.66 1.06 1.07l-8.52 8.52q-.41-.65-1.06-1.06z" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M18.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LineSegmentRegularDuotone.displayName = 'LineSegmentRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineSegmentRegularDuotone, LineSegmentRegularDuotone as LineSegmentRegularDuotoneIcon, LineSegmentRegularDuotone as SiLineSegmentRegularDuotone };
export default LineSegmentRegularDuotone;
export type { LineSegmentRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellDotFillProps = Omit<IconBaseProps, 'children'>;

const BellDotFill = memo(
  forwardRef<SVGSVGElement, BellDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.5q1.25 0 2.4.34a5.49 5.49 0 0 0 6.1 9.06v1q0 .96.5 1.8l1.07 1.77a2 2 0 0 1-1.72 3.03h-3.37a5 5 0 0 1-9.96 0H3.65a2 2 0 0 1-1.72-3.03L3 13.7q.5-.82.5-1.8V10c0-4.7 3.8-8.5 8.5-8.5m-2.96 17a3 3 0 0 0 5.92 0z" clipRule="evenodd" />
        <path fill="currentColor" d="M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

BellDotFill.displayName = 'BellDotFill';

// Triple export pattern (lucide-react style)
export { BellDotFill, BellDotFill as BellDotFillIcon, BellDotFill as SiBellDotFill };
export type { BellDotFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellOffFillProps = Omit<IconBaseProps, 'children'>;

const BellOffFill = memo(
  forwardRef<SVGSVGElement, BellOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.55 20.08a5 5 0 0 1-9.5-1.33h-3.4a2.25 2.25 0 0 1-1.93-3.4l1.07-1.79q.46-.77.46-1.67V10q0-1.46.45-2.77zM9.1 18.75a3 3 0 0 0 5.8 0z" clipRule="evenodd" />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 0 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4M12 1.25A8.75 8.75 0 0 1 20.75 10v1.9c0 .58.16 1.16.46 1.66l1.07 1.78c.61 1.02.3 2.23-.5 2.9L6.63 3.1A8.7 8.7 0 0 1 12 1.25" />
    </IconBase>
  ))
);

BellOffFill.displayName = 'BellOffFill';

// Triple export pattern (lucide-react style)
export { BellOffFill, BellOffFill as BellOffFillIcon, BellOffFill as SiBellOffFill };
export type { BellOffFillProps };

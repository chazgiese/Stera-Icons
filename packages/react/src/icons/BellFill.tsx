import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellFillProps = Omit<IconBaseProps, 'children'>;

const BellFill = memo(
  forwardRef<SVGSVGElement, BellFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.9c0 .58.16 1.16.46 1.66l1.07 1.78c.9 1.5-.18 3.41-1.93 3.41h-3.4a5 5 0 0 1-9.9 0h-3.4a2.25 2.25 0 0 1-1.93-3.4l1.07-1.79q.45-.77.46-1.67V10A8.75 8.75 0 0 1 12 1.25m-2.9 17.5a3 3 0 0 0 5.8 0z" clipRule="evenodd" />
    </IconBase>
  ))
);

BellFill.displayName = 'BellFill';

// Triple export pattern (lucide-react style)
export { BellFill, BellFill as BellFillIcon, BellFill as SiBellFill };
export type { BellFillProps };

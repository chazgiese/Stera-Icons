import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffFillDuotone = memo(
  forwardRef<SVGSVGElement, BellOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.34 18.75h-.4a5 5 0 0 1-9.88 0H3.65a2.25 2.25 0 0 1-1.93-3.4l1.07-1.79q.46-.77.46-1.67V10c0-1.54.4-2.98 1.1-4.24zm-8.24 0a3 3 0 0 0 5.8 0z" clipRule="evenodd" />
        <path d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.9c0 .58.16 1.16.46 1.66l1.07 1.78c.9 1.5-.18 3.41-1.93 3.41h-.19L5.53 4.11A8.7 8.7 0 0 1 12 1.25" />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 1 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

BellOffFillDuotone.displayName = 'BellOffFillDuotone';

export { BellOffFillDuotone };
export type { BellOffFillDuotoneProps };

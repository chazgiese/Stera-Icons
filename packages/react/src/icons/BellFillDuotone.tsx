import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellFillDuotone = memo(
  forwardRef<SVGSVGElement, BellFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.69 18.75a4.75 4.75 0 0 1-9.38 0z" />
        <path fill="currentColor" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v1.9c0 .58.16 1.16.46 1.66l1.07 1.78c.9 1.5-.18 3.41-1.93 3.41H3.65a2.25 2.25 0 0 1-1.93-3.4l1.07-1.79q.45-.77.46-1.67V10A8.75 8.75 0 0 1 12 1.25" opacity={.4} />
    </IconBase>
  ))
);

BellFillDuotone.displayName = 'BellFillDuotone';

export { BellFillDuotone };
export type { BellFillDuotoneProps };

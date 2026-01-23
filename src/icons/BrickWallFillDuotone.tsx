import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrickWallFillDuotone = memo(
  forwardRef<SVGSVGElement, BrickWallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-fill-duotone" {...props}>
      <path d="M20.75 3C21.99 3 23 4 23 5.25v2.42h-5V3zM11 14.33H1V9.67h10zM16 7.67H8V3h8zM23 18.75c0 1.24-1 2.25-2.25 2.25H18v-4.67h5zM6 21H3.25C2.01 21 1 20 1 18.75v-2.42h5z" opacity={0.4} />
        <path fill="currentColor" d="M23 14.33H13V9.67h10zM6 7.67H1V5.25C1 4.01 2 3 3.25 3H6zM16 21H8v-4.67h8z" />
    </IconBase>
  ))
);

BrickWallFillDuotone.displayName = 'BrickWallFillDuotone';

// Triple export pattern (lucide-react style)
export { BrickWallFillDuotone, BrickWallFillDuotone as BrickWallFillDuotoneIcon, BrickWallFillDuotone as SiBrickWallFillDuotone };
export default BrickWallFillDuotone;
export type { BrickWallFillDuotoneProps };

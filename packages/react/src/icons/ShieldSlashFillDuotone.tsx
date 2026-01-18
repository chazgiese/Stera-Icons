import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.76 19.17a13 13 0 0 1-3.95 3.04l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .12-.47zM11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58c0 2.52-.73 4.93-2.03 6.98l-14-14 6.68-2.5z" />
        <path fill="currentColor" d="M1.8 1.8a1 1 0 0 1 1.4 0l18.5 18.5a1 1 0 0 1-1.4 1.4L1.8 3.2a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ShieldSlashFillDuotone.displayName = 'ShieldSlashFillDuotone';

export { ShieldSlashFillDuotone };
export type { ShieldSlashFillDuotoneProps };

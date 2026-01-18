import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.5c.83 0 1.5.67 1.5 1.5v2c0 .28.22.5.5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19v-2c0-.83.67-1.5 1.5-1.5M19 1.5A3.5 3.5 0 0 1 22.5 5v2a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" />
        <path fill="currentColor" d="M21 15.5c.83 0 1.5.67 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2c0-.83.67-1.5 1.5-1.5M7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 5 1.5z" />
    </IconBase>
  ))
);

ScanFillDuotone.displayName = 'ScanFillDuotone';

export { ScanFillDuotone };
export type { ScanFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.25 17.5c0 2.07-1.68 3.75-3.75 3.75h-11c-2.07 0-3.75-1.68-3.75-3.75v-4.62h18.5zM17.5 2.75c2.07 0 3.75 1.68 3.75 3.75v4.63H2.75V6.5c0-2.07 1.68-3.75 3.75-3.75z" opacity={0.4} />
        <path d="M22.5 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-21c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ScanLineFillDuotone.displayName = 'ScanLineFillDuotone';

// Triple export pattern
export { ScanLineFillDuotone, ScanLineFillDuotone as ScanLineFillDuotoneIcon, ScanLineFillDuotone as SiScanLineFillDuotone };
export default ScanLineFillDuotone;
export type { ScanLineFillDuotoneProps };

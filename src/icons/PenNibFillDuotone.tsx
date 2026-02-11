import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibFillDuotone = memo(
  forwardRef<SVGSVGElement, PenNibFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-fill-duotone" {...props}>
      <path d="M13 10.7a2.5 2.5 0 1 1-2 0V1h2z" />
        <path d="M14.12 1a1 1 0 0 1 .68.4c2.27 3.03 4.67 6.9 5.69 10.31.5 1.71.7 3.43.26 4.92A4.8 4.8 0 0 1 18 19.69V22a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.31a4.8 4.8 0 0 1-2.76-3.06c-.44-1.49-.23-3.21.27-4.92C4.53 8.3 6.93 4.43 9.2 1.4A1 1 0 0 1 10 1h1v9.7a2.5 2.5 0 1 0 2 0V1h1.12" opacity={.4} />
    </IconBase>
  ))
);

PenNibFillDuotone.displayName = 'PenNibFillDuotone';

// Triple export pattern (lucide-react style)
export { PenNibFillDuotone, PenNibFillDuotone as PenNibFillDuotoneIcon, PenNibFillDuotone as SiPenNibFillDuotone };
export default PenNibFillDuotone;
export type { PenNibFillDuotoneProps };

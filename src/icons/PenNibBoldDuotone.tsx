import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibBoldDuotone = memo(
  forwardRef<SVGSVGElement, PenNibBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-bold-duotone" {...props}>
      <path fill="currentColor" d="M14.12 1a1 1 0 0 1 .68.4c2.27 3.03 4.67 6.9 5.69 10.31.5 1.7.7 3.43.26 4.92A4.8 4.8 0 0 1 18 19.69v1.06c0 1.24-1 2.25-2.25 2.25h-7.5C7 23 6 22 6 20.75v-1.06a4.8 4.8 0 0 1-2.76-3.06c-.44-1.49-.24-3.21.27-4.92C4.53 8.3 6.93 4.43 9.2 1.4a1 1 0 0 1 .68-.4H11v2h-.5c-2.12 2.9-4.2 6.34-5.07 9.29q-.69 2.33-.27 3.77c.26.87.87 1.58 2.14 1.99A1 1 0 0 1 8 19v1.75q.02.23.25.25h7.5q.23-.02.25-.25V19a1 1 0 0 1 .7-.95c1.27-.41 1.88-1.12 2.14-2 .28-.94.19-2.22-.27-3.76-.88-2.95-2.95-6.4-5.07-9.29H13V1h1.12" opacity={.4} />
        <path fill="currentColor" d="M13 10.7a2.5 2.5 0 1 1-2 0V1h2z" />
    </IconBase>
  ))
);

PenNibBoldDuotone.displayName = 'PenNibBoldDuotone';

// Triple export pattern (lucide-react style)
export { PenNibBoldDuotone, PenNibBoldDuotone as PenNibBoldDuotoneIcon, PenNibBoldDuotone as SiPenNibBoldDuotone };
export default PenNibBoldDuotone;
export type { PenNibBoldDuotoneProps };

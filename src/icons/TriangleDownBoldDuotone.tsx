import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TriangleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, TriangleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-down-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.73 2c1.34 0 2.41 0 3.24.08.8.07 1.52.22 2.12.62A1 1 0 0 0 20 4.38c-.17-.12-.48-.25-1.2-.31C18.06 4 17.1 4 15.72 4H8.27c-1.38 0-2.34 0-3.06.07-.73.06-1.04.19-1.21.31a1 1 0 0 0-1.18-1.62c.62-.45 1.38-.6 2.2-.68C5.87 2 6.94 2 8.28 2z" opacity={.4} />
        <path fill="currentColor" d="M2.82 2.76A1 1 0 1 1 4 4.38a2 2 0 0 0-.82 1.4c-.02.21.03.55.33 1.21s.78 1.5 1.46 2.7L8.7 16.2c.7 1.21 1.18 2.06 1.6 2.66s.69.82.88.9a2 2 0 0 0 1.64 0c.19-.08.46-.3.88-.9s.9-1.45 1.6-2.66l3.73-6.53c.68-1.2 1.16-2.03 1.46-2.69s.35-1 .33-1.2A2 2 0 0 0 20 4.37a1 1 0 0 1 1.18-1.62 4 4 0 0 1 1.63 2.81c.08.76-.16 1.5-.5 2.25q-.54 1.13-1.55 2.86l-3.72 6.52q-1 1.77-1.7 2.82c-.48.69-1 1.27-1.7 1.58a4 4 0 0 1-3.27 0c-.7-.3-1.23-.9-1.7-1.58-.5-.7-1.03-1.64-1.7-2.82l-3.74-6.52Q2.22 8.95 1.7 7.82a4.3 4.3 0 0 1-.5-2.25 4 4 0 0 1 1.63-2.8" />
    </IconBase>
  ))
);

TriangleDownBoldDuotone.displayName = 'TriangleDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { TriangleDownBoldDuotone, TriangleDownBoldDuotone as TriangleDownBoldDuotoneIcon, TriangleDownBoldDuotone as SiTriangleDownBoldDuotone };
export default TriangleDownBoldDuotone;
export type { TriangleDownBoldDuotoneProps };

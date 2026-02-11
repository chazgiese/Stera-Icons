import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PenNibFillProps = Omit<IconBaseProps, 'children'>;

const PenNibFill = memo(
  forwardRef<SVGSVGElement, PenNibFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-fill" {...props}>
      <path d="M11 10.7a2.5 2.5 0 1 0 2 0V1h1.12a1 1 0 0 1 .68.4c2.27 3.03 4.67 6.9 5.69 10.31.5 1.71.7 3.43.26 4.92A4.8 4.8 0 0 1 18 19.69V22a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.31a4.8 4.8 0 0 1-2.76-3.06c-.44-1.49-.23-3.21.27-4.92C4.53 8.3 6.93 4.43 9.2 1.4A1 1 0 0 1 10 1h1z" />
    </IconBase>
  ))
);

PenNibFill.displayName = 'PenNibFill';

// Triple export pattern (lucide-react style)
export { PenNibFill, PenNibFill as PenNibFillIcon, PenNibFill as SiPenNibFill };
export default PenNibFill;
export type { PenNibFillProps };

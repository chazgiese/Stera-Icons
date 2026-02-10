import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellDotFillProps = Omit<IconBaseProps, 'children'>;

const BellDotFill = memo(
  forwardRef<SVGSVGElement, BellDotFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-dot-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25q.81 0 1.58.2a5 5 0 0 0 5.31 8.44q.22.91.74 1.7l.92 1.38a2.75 2.75 0 0 1-2.29 4.28h-1.82a4.5 4.5 0 0 1-8.88 0H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.38 16a2.5 2.5 0 0 0 4.76 0z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

BellDotFill.displayName = 'BellDotFill';

// Triple export pattern (lucide-react style)
export { BellDotFill, BellDotFill as BellDotFillIcon, BellDotFill as SiBellDotFill };
export default BellDotFill;
export type { BellDotFillProps };

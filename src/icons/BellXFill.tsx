import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellXFillProps = Omit<IconBaseProps, 'children'>;

const BellXFill = memo(
  forwardRef<SVGSVGElement, BellXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.75 2.75 0 0 1-2.29 4.28h-1.82a4.5 4.5 0 0 1-8.88 0H5.74c-2.2 0-3.5-2.45-2.3-4.28l.93-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.38 16a2.5 2.5 0 0 0 4.76 0zM14.7 7.79a1 1 0 0 0-1.42 0L12 9.1l-1.3-1.3a1 1 0 0 0-1.4 1.42l1.29 1.29-1.3 1.3a1 1 0 0 0 1.42 1.4L12 11.92l1.3 1.3a1 1 0 0 0 1.4-1.42l-1.29-1.29 1.3-1.3a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

BellXFill.displayName = 'BellXFill';

// Triple export pattern (lucide-react style)
export { BellXFill, BellXFill as BellXFillIcon, BellXFill as SiBellXFill };
export default BellXFill;
export type { BellXFillProps };

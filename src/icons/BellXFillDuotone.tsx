import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellXFillDuotone = memo(
  forwardRef<SVGSVGElement, BellXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-x-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.75 2.75 0 0 1-2.29 4.28h-1.82a4.5 4.5 0 0 1-8.88 0H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3c0-3.86 2.99-7.05 6.75-7.05m-2.38 16a2.5 2.5 0 0 0 4.77 0zM14.7 7.79a1 1 0 0 0-1.42 0L12 9.1l-1.3-1.3a1 1 0 0 0-1.4 1.42l1.29 1.29-1.3 1.3a1 1 0 1 0 1.42 1.4L12 11.92l1.3 1.3a1 1 0 0 0 1.4-1.42l-1.29-1.29 1.3-1.3a1 1 0 0 0 0-1.4" clipRule="evenodd" opacity={.4} />
        <path d="M13.3 7.8a1 1 0 1 1 1.4 1.4l-1.29 1.3 1.3 1.3a1 1 0 0 1-1.42 1.4L12 11.92l-1.3 1.3a1 1 0 0 1-1.4-1.42l1.29-1.29-1.3-1.3a1 1 0 1 1 1.42-1.4L12 9.08z" />
    </IconBase>
  ))
);

BellXFillDuotone.displayName = 'BellXFillDuotone';

// Triple export pattern (lucide-react style)
export { BellXFillDuotone, BellXFillDuotone as BellXFillDuotoneIcon, BellXFillDuotone as SiBellXFillDuotone };
export default BellXFillDuotone;
export type { BellXFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffFillDuotone = memo(
  forwardRef<SVGSVGElement, BellOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-off-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16.84 18.25h-.4a4.5 4.5 0 0 1-8.88 0H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3q0-1.2.36-2.27zm-7.22 0a2.5 2.5 0 0 0 4.77 0z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37A2.75 2.75 0 0 1 19.42 18L6.55 5.14A6.6 6.6 0 0 1 12 2.25" opacity={0.4} />
        <path d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

BellOffFillDuotone.displayName = 'BellOffFillDuotone';

// Triple export pattern (lucide-react style)
export { BellOffFillDuotone, BellOffFillDuotone as BellOffFillDuotoneIcon, BellOffFillDuotone as SiBellOffFillDuotone };
export default BellOffFillDuotone;
export type { BellOffFillDuotoneProps };

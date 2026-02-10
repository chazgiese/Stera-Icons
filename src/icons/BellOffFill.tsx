import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffFillProps = Omit<IconBaseProps, 'children'>;

const BellOffFill = memo(
  forwardRef<SVGSVGElement, BellOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-off-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.22 19.05a4.5 4.5 0 0 1-8.66-.8H5.74c-2.2 0-3.5-2.45-2.29-4.28l.92-1.37c.57-.87.88-1.88.88-2.92V9.3q0-.58.09-1.13zm-6.6-.8a2.5 2.5 0 0 0 4.77 0z" clipRule="evenodd" />
        <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4M12 2.25c3.76 0 6.75 3.2 6.75 7.05v.38c0 1.04.3 2.05.88 2.92l.92 1.37a2.74 2.74 0 0 1-.31 3.44L7.19 4.36A6.6 6.6 0 0 1 12 2.25" />
    </IconBase>
  ))
);

BellOffFill.displayName = 'BellOffFill';

// Triple export pattern (lucide-react style)
export { BellOffFill, BellOffFill as BellOffFillIcon, BellOffFill as SiBellOffFill };
export default BellOffFill;
export type { BellOffFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, BellOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.18 8.2a1 1 0 0 1 1.96.4Q5 9.28 5 10v2.45a3 3 0 0 1-.43 1.54l-.9 1.5A1 1 0 0 0 4.54 17h9.21a1 1 0 0 1 .71.3l1.82 1.8c.3.31.38.78.19 1.17A5 5 0 0 1 7.1 19H4.53a3 3 0 0 1-2.57-4.54l.9-1.5a1 1 0 0 0 .14-.51V10q0-.91.18-1.8m6 10.8a3 3 0 0 0 5.1.95l-.95-.95z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 1a9 9 0 0 1 9 9v2.45a1 1 0 0 0 .14.51l.9 1.5c.6.99.54 2.12.05 3a1 1 0 0 1-1.75-.98 1 1 0 0 0-.01-1l-.9-1.5a3 3 0 0 1-.43-1.53V10A7 7 0 0 0 8.13 4.17a1 1 0 0 1-1.1-1.67A9 9 0 0 1 12 1" opacity={0.4} />
        <path fill="currentColor" d="M2.3 2.3a1 1 0 0 1 1.4 0l18 18a1 1 0 1 1-1.4 1.4l-18-18a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

BellOffBoldDuotone.displayName = 'BellOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { BellOffBoldDuotone, BellOffBoldDuotone as BellOffBoldDuotoneIcon, BellOffBoldDuotone as SiBellOffBoldDuotone };
export type { BellOffBoldDuotoneProps };

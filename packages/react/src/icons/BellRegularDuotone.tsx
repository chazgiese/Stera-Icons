import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BellRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellRegularDuotone = memo(
  forwardRef<SVGSVGElement, BellRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.69 18.75a4.75 4.75 0 0 1-9.38 0h1.53a3.25 3.25 0 0 0 6.32 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25A8.75 8.75 0 0 1 20.75 10v2.45q0 .34.18.64l.9 1.5a2.75 2.75 0 0 1-2.36 4.16H4.53a2.75 2.75 0 0 1-2.36-4.16l.9-1.5q.18-.3.18-.64V10A8.75 8.75 0 0 1 12 1.25m0 1.5C8 2.75 4.75 6 4.75 10v2.45q0 .76-.4 1.41l-.89 1.5c-.5.83.1 1.89 1.07 1.89h14.94c.97 0 1.57-1.06 1.07-1.9l-.9-1.49q-.38-.66-.39-1.41V10c0-4-3.25-7.25-7.25-7.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BellRegularDuotone.displayName = 'BellRegularDuotone';

// Triple export pattern (lucide-react style)
export { BellRegularDuotone, BellRegularDuotone as BellRegularDuotoneIcon, BellRegularDuotone as SiBellRegularDuotone };
export type { BellRegularDuotoneProps };

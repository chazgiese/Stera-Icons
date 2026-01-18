import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LotusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusRegularDuotone = memo(
  forwardRef<SVGSVGElement, LotusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.92 4.82q.34-.15.67.02l2.98 1.59q-.5.59-.86 1.24L5.77 6.63l-.57 2.7A9 9 0 0 0 4 9.25h-.32l.82-3.9.03-.09q.1-.3.4-.44M18.4 4.84a.75.75 0 0 1 1.1.5l.82 3.91H20q-.6 0-1.2.08l-.57-2.7-1.94 1.04a9 9 0 0 0-.86-1.24z" />
        <path fill="currentColor" fillRule="evenodd" d="M11.53 3.42a.75.75 0 0 1 1 .05l2.34 2.34a9 9 0 0 1 2.27 3.92q1.35-.47 2.86-.48h2a.75.75 0 0 1 .75.75v2A8.75 8.75 0 0 1 14 20.75h-4A8.75 8.75 0 0 1 1.25 12v-2A.75.75 0 0 1 2 9.25h2q1.5 0 2.86.48A9 9 0 0 1 9.13 5.8l2.34-2.34zM20 10.75q-1.39 0-2.6.48a8.7 8.7 0 0 1-2.53 6.96l-1.06 1.06H14c4 0 7.25-3.24 7.25-7.25v-1.25zM2.75 12c0 4 3.25 7.25 7.25 7.25h.19l-1.06-1.06a8.7 8.7 0 0 1-2.53-6.96 7 7 0 0 0-2.6-.48H2.75zm7.44-5.13a7.2 7.2 0 0 0 0 10.26l1.81 1.8 1.81-1.8a7.24 7.24 0 0 0 0-10.26L12 5.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusRegularDuotone.displayName = 'LotusRegularDuotone';

export { LotusRegularDuotone };
export type { LotusRegularDuotoneProps };

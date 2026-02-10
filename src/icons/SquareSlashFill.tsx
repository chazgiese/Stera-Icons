import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashFillProps = Omit<IconBaseProps, 'children'>;

const SquareSlashFill = memo(
  forwardRef<SVGSVGElement, SquareSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-slash-fill" {...props}>
      <path fill="currentColor" d="m18.75 20.17-.48.29c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7a5 5 0 0 1 .77-2.45zM13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.77 2.46L5.24 3.83l.49-.29c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3z" />
    </IconBase>
  ))
);

SquareSlashFill.displayName = 'SquareSlashFill';

// Triple export pattern (lucide-react style)
export { SquareSlashFill, SquareSlashFill as SquareSlashFillIcon, SquareSlashFill as SiSquareSlashFill };
export default SquareSlashFill;
export type { SquareSlashFillProps };

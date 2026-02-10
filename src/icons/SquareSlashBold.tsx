import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareSlashBoldProps = Omit<IconBaseProps, 'children'>;

const SquareSlashBold = memo(
  forwardRef<SVGSVGElement, SquareSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-slash-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM5.3 6.71c-.12.25-.2.6-.25 1.14C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05a3 3 0 0 0 1.14-.24zM10.4 5c-1.14 0-1.93 0-2.55.05-.55.05-.89.13-1.14.24l12 12c.11-.25.2-.59.24-1.14.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquareSlashBold.displayName = 'SquareSlashBold';

// Triple export pattern (lucide-react style)
export { SquareSlashBold, SquareSlashBold as SquareSlashBoldIcon, SquareSlashBold as SiSquareSlashBold };
export default SquareSlashBold;
export type { SquareSlashBoldProps };

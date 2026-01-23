import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DuplicateFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicateFillDuotone = memo(
  forwardRef<SVGSVGElement, DuplicateFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.04.52.05 1.2A1 1 0 0 0 16 7h-2.5a1 1 0 1 0 0 2H16a1 1 0 0 0 1-.9v1.5q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.1a1 1 0 0 0 .9-1v-2.5a1 1 0 1 0-2 0V16a1 1 0 0 0 .88 1q-.66-.02-1.19-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 11.25 2 9.6v-.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2zm1.36 5.9a1 1 0 0 0-1.25-.67A4 4 0 0 0 7.23 9.7a1 1 0 1 0 1.91.58q.03-.12.08-.2a2 2 0 0 1 1.07-.95 1 1 0 0 0 .67-1.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.5 20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM7.9 18.04a1 1 0 0 1 1.24.67q.03.11.08.2a2 2 0 0 0 1.07.95 1 1 0 1 1-.58 1.91 4 4 0 0 1-2.48-2.48 1 1 0 0 1 .66-1.25M19.86 18.71a1 1 0 1 1 1.91.58 4 4 0 0 1-2.48 2.48 1 1 0 1 1-.58-1.91q.11-.03.2-.08a2 2 0 0 0 .95-1.07M8 12.5a1 1 0 0 1 1 1V16a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1M21 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M9.71 7.23a1 1 0 1 1 .58 1.91l-.2.08a2 2 0 0 0-.95 1.07 1 1 0 1 1-1.91-.58q.08-.27.2-.53a4 4 0 0 1 2.28-1.95M18.04 7.9a1 1 0 0 1 1.25-.67q.27.08.53.2a4 4 0 0 1 1.95 2.28 1 1 0 1 1-1.91.58l-.08-.2a2 2 0 0 0-1.07-.95 1 1 0 0 1-.67-1.25M16 7a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DuplicateFillDuotone.displayName = 'DuplicateFillDuotone';

// Triple export pattern (lucide-react style)
export { DuplicateFillDuotone, DuplicateFillDuotone as DuplicateFillDuotoneIcon, DuplicateFillDuotone as SiDuplicateFillDuotone };
export default DuplicateFillDuotone;
export type { DuplicateFillDuotoneProps };

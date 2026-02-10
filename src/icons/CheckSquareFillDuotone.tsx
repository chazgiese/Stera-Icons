import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-square-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm3.08 5.51a1 1 0 0 0-1.42.06l-4.72 5.16-1.77-2.12a1 1 0 0 0-1.54 1.28l1.92 2.3.3.34c.1.11.28.27.53.36q.5.18 1 .03c.26-.09.44-.24.56-.34l.32-.33 4.88-5.32a1 1 0 0 0-.06-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.26 8.57a1 1 0 0 1 1.48 1.36l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34a1.5 1.5 0 0 1-1.54-.4l-.3-.33-1.92-2.3a1 1 0 0 1 1.54-1.28l1.76 2.12z" />
    </IconBase>
  ))
);

CheckSquareFillDuotone.displayName = 'CheckSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckSquareFillDuotone, CheckSquareFillDuotone as CheckSquareFillDuotoneIcon, CheckSquareFillDuotone as SiCheckSquareFillDuotone };
export default CheckSquareFillDuotone;
export type { CheckSquareFillDuotoneProps };

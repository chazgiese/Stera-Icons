import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-square-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertSquareFillDuotone.displayName = 'AlertSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertSquareFillDuotone, AlertSquareFillDuotone as AlertSquareFillDuotoneIcon, AlertSquareFillDuotone as SiAlertSquareFillDuotone };
export default AlertSquareFillDuotone;
export type { AlertSquareFillDuotoneProps };

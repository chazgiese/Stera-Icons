import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertHexagonFillProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonFill = memo(
  forwardRef<SVGSVGElement, AlertHexagonFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-hexagon-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 0 1.62c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.46.85c-.64.21-1.34.2-2.3.2H9.81c-.96 0-1.66.01-2.3-.2a4 4 0 0 1-1.46-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.8-1.4-.92-2.04a4 4 0 0 1 0-1.62c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertHexagonFill.displayName = 'AlertHexagonFill';

// Triple export pattern (lucide-react style)
export { AlertHexagonFill, AlertHexagonFill as AlertHexagonFillIcon, AlertHexagonFill as SiAlertHexagonFill };
export default AlertHexagonFill;
export type { AlertHexagonFillProps };

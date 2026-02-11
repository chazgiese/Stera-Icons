import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertHexagonFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertHexagonFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertHexagonFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-hexagon-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 3c.95 0 1.65-.01 2.3.2a4 4 0 0 1 1.45.85c.5.46.83 1.08 1.3 1.9l1.8 3.2c.45.8.8 1.4.92 2.04a4 4 0 0 1 0 1.62c-.13.65-.47 1.23-.92 2.03l-1.8 3.2c-.47.83-.8 1.45-1.3 1.91a4 4 0 0 1-1.46.85c-.64.21-1.34.2-2.3.2H9.81c-.96 0-1.66.01-2.3-.2a4 4 0 0 1-1.46-.85c-.5-.46-.83-1.08-1.3-1.9l-1.8-3.2c-.45-.8-.8-1.4-.92-2.04a4 4 0 0 1 0-1.62c.13-.65.47-1.23.92-2.03l1.8-3.2c.47-.83.8-1.45 1.3-1.91a4 4 0 0 1 1.46-.85c.64-.21 1.34-.2 2.3-.2zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertHexagonFillDuotone.displayName = 'AlertHexagonFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertHexagonFillDuotone, AlertHexagonFillDuotone as AlertHexagonFillDuotoneIcon, AlertHexagonFillDuotone as SiAlertHexagonFillDuotone };
export default AlertHexagonFillDuotone;
export type { AlertHexagonFillDuotoneProps };

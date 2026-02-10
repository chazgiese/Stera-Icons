import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertCircleBoldDuotone.displayName = 'AlertCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlertCircleBoldDuotone, AlertCircleBoldDuotone as AlertCircleBoldDuotoneIcon, AlertCircleBoldDuotone as SiAlertCircleBoldDuotone };
export default AlertCircleBoldDuotone;
export type { AlertCircleBoldDuotoneProps };

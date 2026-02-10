import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertCircleFillDuotone.displayName = 'AlertCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertCircleFillDuotone, AlertCircleFillDuotone as AlertCircleFillDuotoneIcon, AlertCircleFillDuotone as SiAlertCircleFillDuotone };
export default AlertCircleFillDuotone;
export type { AlertCircleFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertCircleFillDuotone.displayName = 'AlertCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { AlertCircleFillDuotone, AlertCircleFillDuotone as AlertCircleFillDuotoneIcon, AlertCircleFillDuotone as SiAlertCircleFillDuotone };
export default AlertCircleFillDuotone;
export type { AlertCircleFillDuotoneProps };

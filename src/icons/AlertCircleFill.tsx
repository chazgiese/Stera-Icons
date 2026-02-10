import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFill = memo(
  forwardRef<SVGSVGElement, AlertCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-8a1 1 0 0 0-1 1V12a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleFill.displayName = 'AlertCircleFill';

// Triple export pattern (lucide-react style)
export { AlertCircleFill, AlertCircleFill as AlertCircleFillIcon, AlertCircleFill as SiAlertCircleFill };
export default AlertCircleFill;
export type { AlertCircleFillProps };

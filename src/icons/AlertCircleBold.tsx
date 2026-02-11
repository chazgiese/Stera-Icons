import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AlertCircleBold = memo(
  forwardRef<SVGSVGElement, AlertCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-bold" {...props}>
      <path d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleBold.displayName = 'AlertCircleBold';

// Triple export pattern (lucide-react style)
export { AlertCircleBold, AlertCircleBold as AlertCircleBoldIcon, AlertCircleBold as SiAlertCircleBold };
export default AlertCircleBold;
export type { AlertCircleBoldProps };

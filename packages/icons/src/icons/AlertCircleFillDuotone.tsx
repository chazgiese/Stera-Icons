import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, AlertCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.63c5.73 0 10.38 4.64 10.38 10.37S17.73 22.38 12 22.38 1.63 17.73 1.63 12 6.27 1.63 12 1.63m0 12.87c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-7.87c-.48 0-.87.39-.87.87V12c0 .48.39.88.87.88s.88-.4.88-.88V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.63c.48 0 .88.39.88.87V12c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlertCircleFillDuotone.displayName = 'AlertCircleFillDuotone';

// Triple export pattern
export { AlertCircleFillDuotone, AlertCircleFillDuotone as AlertCircleFillDuotoneIcon, AlertCircleFillDuotone as SiAlertCircleFillDuotone };
export default AlertCircleFillDuotone;
export type { AlertCircleFillDuotoneProps };

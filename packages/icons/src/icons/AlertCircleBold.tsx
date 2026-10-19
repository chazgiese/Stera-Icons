import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AlertCircleBold = memo(
  forwardRef<SVGSVGElement, AlertCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 6.5c.55 0 1 .45 1 1V12c0 .55-.45 1-1 1s-1-.45-1-1V7.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleBold.displayName = 'AlertCircleBold';

// Triple export pattern
export { AlertCircleBold, AlertCircleBold as AlertCircleBoldIcon, AlertCircleBold as SiAlertCircleBold };
export default AlertCircleBold;
export type { AlertCircleBoldProps };

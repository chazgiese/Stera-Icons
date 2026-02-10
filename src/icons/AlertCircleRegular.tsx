import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleRegularProps = Omit<IconBaseProps, 'children'>;

const AlertCircleRegular = memo(
  forwardRef<SVGSVGElement, AlertCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle" {...props}>
      <path fill="currentColor" d="M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.75c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleRegular.displayName = 'AlertCircleRegular';

// Triple export pattern (lucide-react style)
export { AlertCircleRegular, AlertCircleRegular as AlertCircleRegularIcon, AlertCircleRegular as SiAlertCircleRegular };
export default AlertCircleRegular;
export type { AlertCircleRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertCircleRegularProps = Omit<IconBaseProps, 'children'>;

const AlertCircleRegular = memo(
  forwardRef<SVGSVGElement, AlertCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertCircleRegular.displayName = 'AlertCircleRegular';

// Triple export pattern (lucide-react style)
export { AlertCircleRegular, AlertCircleRegular as AlertCircleRegularIcon, AlertCircleRegular as SiAlertCircleRegular };
export default AlertCircleRegular;
export type { AlertCircleRegularProps };

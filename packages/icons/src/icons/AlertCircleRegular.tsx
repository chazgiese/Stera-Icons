import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertCircleRegularProps = Omit<IconBaseProps, 'children'>;

const AlertCircleRegular = memo(
  forwardRef<SVGSVGElement, AlertCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.75c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertCircleRegular.displayName = 'AlertCircleRegular';

// Triple export pattern
export { AlertCircleRegular, AlertCircleRegular as AlertCircleRegularIcon, AlertCircleRegular as SiAlertCircleRegular };
export default AlertCircleRegular;
export type { AlertCircleRegularProps };

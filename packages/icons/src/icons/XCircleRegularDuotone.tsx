import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, XCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M8.47 8.47c.3-.3.77-.3 1.06 0L12 10.94l2.47-2.46c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06L13.06 12l2.47 2.46c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 13.06l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L10.94 12 8.47 9.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

XCircleRegularDuotone.displayName = 'XCircleRegularDuotone';

// Triple export pattern
export { XCircleRegularDuotone, XCircleRegularDuotone as XCircleRegularDuotoneIcon, XCircleRegularDuotone as SiXCircleRegularDuotone };
export default XCircleRegularDuotone;
export type { XCircleRegularDuotoneProps };

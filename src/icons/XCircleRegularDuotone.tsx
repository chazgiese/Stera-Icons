import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, XCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M8.47 8.47c.3-.3.77-.3 1.06 0L12 10.94l2.47-2.46a.75.75 0 0 1 1.06 1.06L13.06 12l2.47 2.46a.75.75 0 0 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

XCircleRegularDuotone.displayName = 'XCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { XCircleRegularDuotone, XCircleRegularDuotone as XCircleRegularDuotoneIcon, XCircleRegularDuotone as SiXCircleRegularDuotone };
export default XCircleRegularDuotone;
export type { XCircleRegularDuotoneProps };

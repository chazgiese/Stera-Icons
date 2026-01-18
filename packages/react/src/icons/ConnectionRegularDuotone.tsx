import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionRegularDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2.25a4.25 4.25 0 0 1 3.49 6.68L15.07 14a4.25 4.25 0 1 1-1.06 1.06L8.93 10A4.25 4.25 0 1 1 6.5 2.25m11 12.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-11-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionRegularDuotone.displayName = 'ConnectionRegularDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionRegularDuotone, ConnectionRegularDuotone as ConnectionRegularDuotoneIcon, ConnectionRegularDuotone as SiConnectionRegularDuotone };
export type { ConnectionRegularDuotoneProps };

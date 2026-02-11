import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionBoldDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-bold-duotone" {...props}>
      <path d="M7 12.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M17 2.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" opacity={0.4} />
        <path fillRule="evenodd" d="M7 2.75a4.25 4.25 0 0 1 3.63 6.46l4.16 4.16q.98-.61 2.21-.62a4.25 4.25 0 1 1-3.63 2.04l-4.16-4.16q-.98.61-2.21.62a4.25 4.25 0 0 1 0-8.5m10 12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-10-10a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionBoldDuotone.displayName = 'ConnectionBoldDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionBoldDuotone, ConnectionBoldDuotone as ConnectionBoldDuotoneIcon, ConnectionBoldDuotone as SiConnectionBoldDuotone };
export default ConnectionBoldDuotone;
export type { ConnectionBoldDuotoneProps };

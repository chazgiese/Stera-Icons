import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionBoldProps = Omit<IconBaseProps, 'children'>;

const ConnectionBold = memo(
  forwardRef<SVGSVGElement, ConnectionBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-bold" {...props}>
      <path fillRule="evenodd" d="M7 12.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M7 2.75a4.25 4.25 0 0 1 3.63 6.46l4.16 4.16q.98-.61 2.21-.62a4.25 4.25 0 1 1-3.63 2.04l-4.16-4.16q-.98.61-2.21.62a4.25 4.25 0 0 1 0-8.5m10 12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-10-10a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M17 2.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionBold.displayName = 'ConnectionBold';

// Triple export pattern (lucide-react style)
export { ConnectionBold, ConnectionBold as ConnectionBoldIcon, ConnectionBold as SiConnectionBold };
export default ConnectionBold;
export type { ConnectionBoldProps };

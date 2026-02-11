import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionFillProps = Omit<IconBaseProps, 'children'>;

const ConnectionFill = memo(
  forwardRef<SVGSVGElement, ConnectionFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-fill" {...props}>
      <path d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <path d="M7 3a4 4 0 0 1 3.45 6.03l4.52 4.52q.91-.54 2.03-.55a4 4 0 1 1-3.45 1.97l-4.52-4.52q-.91.54-2.03.55a4 4 0 1 1 0-8" />
        <path d="M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ConnectionFill.displayName = 'ConnectionFill';

// Triple export pattern (lucide-react style)
export { ConnectionFill, ConnectionFill as ConnectionFillIcon, ConnectionFill as SiConnectionFill };
export default ConnectionFill;
export type { ConnectionFillProps };

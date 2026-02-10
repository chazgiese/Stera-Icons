import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-fill-duotone" {...props}>
      <path d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" opacity={0.4} />
        <path fill="currentColor" d="M7 3a4 4 0 0 1 3.45 6.03l4.52 4.52q.91-.54 2.03-.55a4 4 0 1 1-3.45 1.97l-4.52-4.52q-.91.54-2.03.55a4 4 0 1 1 0-8" />
    </IconBase>
  ))
);

ConnectionFillDuotone.displayName = 'ConnectionFillDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionFillDuotone, ConnectionFillDuotone as ConnectionFillDuotoneIcon, ConnectionFillDuotone as SiConnectionFillDuotone };
export default ConnectionFillDuotone;
export type { ConnectionFillDuotoneProps };

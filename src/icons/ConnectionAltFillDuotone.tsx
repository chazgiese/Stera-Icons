import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt-fill-duotone" {...props}>
      <path d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" opacity={0.4} />
        <path fill="currentColor" d="M7 3a4 4 0 0 1 3.98 3.62l.05.42c.47 4.18 1.99 5.57 6.35 5.98a4 4 0 1 1-4.36 4.36c-.43-4.5-1.9-5.97-6.4-6.4A4 4 0 0 1 7 3" />
    </IconBase>
  ))
);

ConnectionAltFillDuotone.displayName = 'ConnectionAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionAltFillDuotone, ConnectionAltFillDuotone as ConnectionAltFillDuotoneIcon, ConnectionAltFillDuotone as SiConnectionAltFillDuotone };
export default ConnectionAltFillDuotone;
export type { ConnectionAltFillDuotoneProps };

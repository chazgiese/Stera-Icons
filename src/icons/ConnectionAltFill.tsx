import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltFillProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFill = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt-fill" {...props}>
      <path d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <path d="M7 3a4 4 0 0 1 3.98 3.62l.05.42c.47 4.18 1.99 5.57 6.35 5.98a4 4 0 1 1-4.36 4.36c-.43-4.5-1.9-5.97-6.4-6.4A4 4 0 0 1 7 3" />
        <path d="M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ConnectionAltFill.displayName = 'ConnectionAltFill';

// Triple export pattern (lucide-react style)
export { ConnectionAltFill, ConnectionAltFill as ConnectionAltFillIcon, ConnectionAltFill as SiConnectionAltFill };
export default ConnectionAltFill;
export type { ConnectionAltFillProps };

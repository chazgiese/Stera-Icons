import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt-bold-duotone" {...props}>
      <path d="M7 12.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M17 2.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" opacity={0.4} />
        <path fillRule="evenodd" d="M7 2.75c2.28 0 4.14 1.8 4.25 4.05.2 4.2 1.74 5.76 5.95 5.95a4.25 4.25 0 1 1-4.45 4.45l-.02-.39c-.27-3.91-1.86-5.37-5.93-5.56a4.25 4.25 0 0 1 .2-8.5m10 12a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-10-10a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltBoldDuotone.displayName = 'ConnectionAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionAltBoldDuotone, ConnectionAltBoldDuotone as ConnectionAltBoldDuotoneIcon, ConnectionAltBoldDuotone as SiConnectionAltBoldDuotone };
export default ConnectionAltBoldDuotone;
export type { ConnectionAltBoldDuotoneProps };

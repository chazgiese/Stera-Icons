import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt-bold-duotone" {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2A4.5 4.5 0 0 1 11 6.43c.07 4.65 1.92 6.5 6.57 6.57A4.5 4.5 0 1 1 13 17.57c-.07-4.65-1.92-6.5-6.57-6.57a4.5 4.5 0 0 1 .07-9m11 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltBoldDuotone.displayName = 'ConnectionAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionAltBoldDuotone, ConnectionAltBoldDuotone as ConnectionAltBoldDuotoneIcon, ConnectionAltBoldDuotone as SiConnectionAltBoldDuotone };
export default ConnectionAltBoldDuotone;
export type { ConnectionAltBoldDuotoneProps };

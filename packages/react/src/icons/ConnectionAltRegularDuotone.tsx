import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" opacity={0.4} />
        <path fill="currentColor" d="M6.5 2A4.5 4.5 0 0 1 11 6.5c0 4.6 1.9 6.5 6.5 6.5a4.5 4.5 0 1 1-4.5 4.5c0-4.6-1.9-6.5-6.5-6.5a4.5 4.5 0 0 1 0-9m11 12.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-11-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" />
    </IconBase>
  ))
);

ConnectionAltRegularDuotone.displayName = 'ConnectionAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionAltRegularDuotone, ConnectionAltRegularDuotone as ConnectionAltRegularDuotoneIcon, ConnectionAltRegularDuotone as SiConnectionAltRegularDuotone };
export type { ConnectionAltRegularDuotoneProps };

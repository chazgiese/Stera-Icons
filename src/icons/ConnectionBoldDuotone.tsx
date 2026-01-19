import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionBoldDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-bold-duotone" {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2a4.5 4.5 0 0 1 3.8 6.9l4.8 4.79q1.06-.67 2.4-.69a4.5 4.5 0 1 1-3.81 2.1l-4.8-4.8Q7.84 11 6.5 11a4.5 4.5 0 0 1 0-9m11 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionBoldDuotone.displayName = 'ConnectionBoldDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionBoldDuotone, ConnectionBoldDuotone as ConnectionBoldDuotoneIcon, ConnectionBoldDuotone as SiConnectionBoldDuotone };
export type { ConnectionBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionBoldProps = Omit<IconBaseProps, 'children'>;

const ConnectionBold = memo(
  forwardRef<SVGSVGElement, ConnectionBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2a4.5 4.5 0 0 1 3.8 6.9l4.8 4.79q1.06-.67 2.4-.69a4.5 4.5 0 1 1-3.81 2.1l-4.8-4.8Q7.84 11 6.5 11a4.5 4.5 0 0 1 0-9m11 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionBold.displayName = 'ConnectionBold';

// Triple export pattern (lucide-react style)
export { ConnectionBold, ConnectionBold as ConnectionBoldIcon, ConnectionBold as SiConnectionBold };
export default ConnectionBold;
export type { ConnectionBoldProps };

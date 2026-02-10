import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltRegularProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltRegular = memo(
  forwardRef<SVGSVGElement, ConnectionAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M7 3a4 4 0 0 1 3.98 3.62l.05.42c.47 4.18 1.99 5.57 6.35 5.98a4 4 0 1 1-4.36 4.36c-.43-4.5-1.9-5.97-6.4-6.4A4 4 0 0 1 7 3m10 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltRegular.displayName = 'ConnectionAltRegular';

// Triple export pattern (lucide-react style)
export { ConnectionAltRegular, ConnectionAltRegular as ConnectionAltRegularIcon, ConnectionAltRegular as SiConnectionAltRegular };
export default ConnectionAltRegular;
export type { ConnectionAltRegularProps };

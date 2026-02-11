import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionRegularProps = Omit<IconBaseProps, 'children'>;

const ConnectionRegular = memo(
  forwardRef<SVGSVGElement, ConnectionRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection" {...props}>
      <path fillRule="evenodd" d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M7 3a4 4 0 0 1 3.3 6.25l4.45 4.44a4 4 0 1 1-1.06 1.06l-4.44-4.44A4 4 0 1 1 7 3m10 11.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M7 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionRegular.displayName = 'ConnectionRegular';

// Triple export pattern (lucide-react style)
export { ConnectionRegular, ConnectionRegular as ConnectionRegularIcon, ConnectionRegular as SiConnectionRegular };
export default ConnectionRegular;
export type { ConnectionRegularProps };

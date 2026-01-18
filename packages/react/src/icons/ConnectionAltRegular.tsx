import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionAltRegularProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltRegular = memo(
  forwardRef<SVGSVGElement, ConnectionAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 2A4.5 4.5 0 0 1 11 6.5c0 4.6 1.9 6.5 6.5 6.5a4.5 4.5 0 1 1-4.5 4.5c0-4.6-1.9-6.5-6.5-6.5a4.5 4.5 0 0 1 0-9m11 12.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-11-11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltRegular.displayName = 'ConnectionAltRegular';

// Triple export pattern (lucide-react style)
export { ConnectionAltRegular, ConnectionAltRegular as ConnectionAltRegularIcon, ConnectionAltRegular as SiConnectionAltRegular };
export type { ConnectionAltRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ConnectionAltFillProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFill = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
        <path fill="currentColor" d="M6.5 2A4.5 4.5 0 0 1 11 6.43c.07 4.65 1.92 6.5 6.57 6.57A4.5 4.5 0 1 1 13 17.57c-.07-4.65-1.92-6.5-6.57-6.57a4.5 4.5 0 0 1 .07-9" />
        <path fill="currentColor" d="M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" />
    </IconBase>
  ))
);

ConnectionAltFill.displayName = 'ConnectionAltFill';

// Triple export pattern (lucide-react style)
export { ConnectionAltFill, ConnectionAltFill as ConnectionAltFillIcon, ConnectionAltFill as SiConnectionAltFill };
export type { ConnectionAltFillProps };

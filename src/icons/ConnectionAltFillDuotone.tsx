import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConnectionAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConnectionAltFillDuotone = memo(
  forwardRef<SVGSVGElement, ConnectionAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="connection-alt-fill-duotone" {...props}>
      <path d="M6.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M17.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.5 2A4.5 4.5 0 0 1 11 6.43c.07 4.65 1.92 6.5 6.57 6.57A4.5 4.5 0 1 1 13 17.57c-.07-4.65-1.92-6.5-6.57-6.57a4.5 4.5 0 0 1 .07-9" clipRule="evenodd" />
    </IconBase>
  ))
);

ConnectionAltFillDuotone.displayName = 'ConnectionAltFillDuotone';

// Triple export pattern (lucide-react style)
export { ConnectionAltFillDuotone, ConnectionAltFillDuotone as ConnectionAltFillDuotoneIcon, ConnectionAltFillDuotone as SiConnectionAltFillDuotone };
export default ConnectionAltFillDuotone;
export type { ConnectionAltFillDuotoneProps };

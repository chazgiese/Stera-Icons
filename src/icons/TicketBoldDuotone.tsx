import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TicketBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketBoldDuotone = memo(
  forwardRef<SVGSVGElement, TicketBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-bold-duotone" {...props}>
      <path d="M15 15a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 6v2a1 1 0 1 1-2 0V6z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20 4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3zM4 6a1 1 0 0 0-1 1v1.13a4 4 0 0 1 0 7.74V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.13a4 4 0 0 1 0-7.74V7a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketBoldDuotone.displayName = 'TicketBoldDuotone';

// Triple export pattern (lucide-react style)
export { TicketBoldDuotone, TicketBoldDuotone as TicketBoldDuotoneIcon, TicketBoldDuotone as SiTicketBoldDuotone };
export default TicketBoldDuotone;
export type { TicketBoldDuotoneProps };

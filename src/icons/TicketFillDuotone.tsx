import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketFillDuotone = memo(
  forwardRef<SVGSVGElement, TicketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M19.5 5a2 2 0 0 1 2 2v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5v2a2 2 0 0 1-2 2H15v-2a1 1 0 1 0-2 0v2H4.5a2 2 0 0 1-2-2v-2c0-.28.22-.5.5-.5a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7c0-1.1.9-2 2-2H13v2a1 1 0 1 0 2 0V5zM14 10a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M14 16a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1M14 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M15 7a1 1 0 1 1-2 0V5h2z" />
    </IconBase>
  ))
);

TicketFillDuotone.displayName = 'TicketFillDuotone';

// Triple export pattern (lucide-react style)
export { TicketFillDuotone, TicketFillDuotone as TicketFillDuotoneIcon, TicketFillDuotone as SiTicketFillDuotone };
export default TicketFillDuotone;
export type { TicketFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TicketFillProps = Omit<IconBaseProps, 'children'>;

const TicketFill = memo(
  forwardRef<SVGSVGElement, TicketFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 7a1 1 0 1 0 2 0V4.5h4A2.5 2.5 0 0 1 22.5 7v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5v2a2.5 2.5 0 0 1-2.5 2.5h-4V17a1 1 0 1 0-2 0v2.5H4A2.5 2.5 0 0 1 1.5 17v-2c0-.28.22-.5.5-.5a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7A2.5 2.5 0 0 1 4 4.5h10zm1 3a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketFill.displayName = 'TicketFill';

// Triple export pattern (lucide-react style)
export { TicketFill, TicketFill as TicketFillIcon, TicketFill as SiTicketFill };
export type { TicketFillProps };

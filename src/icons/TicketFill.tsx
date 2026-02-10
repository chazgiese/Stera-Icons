import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketFillProps = Omit<IconBaseProps, 'children'>;

const TicketFill = memo(
  forwardRef<SVGSVGElement, TicketFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 7a1 1 0 1 0 2 0V5h4.5a2 2 0 0 1 2 2v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5v2a2 2 0 0 1-2 2H15v-2a1 1 0 1 0-2 0v2H4.5a2 2 0 0 1-2-2v-2c0-.28.22-.5.5-.5a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7c0-1.1.9-2 2-2H13zm1 3a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketFill.displayName = 'TicketFill';

// Triple export pattern (lucide-react style)
export { TicketFill, TicketFill as TicketFillIcon, TicketFill as SiTicketFill };
export default TicketFill;
export type { TicketFillProps };

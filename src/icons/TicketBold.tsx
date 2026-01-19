import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TicketBoldProps = Omit<IconBaseProps, 'children'>;

const TicketBold = memo(
  forwardRef<SVGSVGElement, TicketBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-bold" {...props}>
      <path fill="currentColor" d="M15 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M20 4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3zM4 6a1 1 0 0 0-1 1v1.13a4 4 0 0 1 0 7.74V17a1 1 0 0 0 1 1h10v-2a1 1 0 1 1 2 0v2h4a1 1 0 0 0 1-1v-1.13a4 4 0 0 1 0-7.74V7a1 1 0 0 0-1-1h-4v2a1 1 0 1 1-2 0V6z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketBold.displayName = 'TicketBold';

// Triple export pattern (lucide-react style)
export { TicketBold, TicketBold as TicketBoldIcon, TicketBold as SiTicketBold };
export default TicketBold;
export type { TicketBoldProps };

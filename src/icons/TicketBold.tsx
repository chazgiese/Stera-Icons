import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketBoldProps = Omit<IconBaseProps, 'children'>;

const TicketBold = memo(
  forwardRef<SVGSVGElement, TicketBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-bold" {...props}>
      <path d="M14 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M18.6 4.5q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96T22 7.9v1.6a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1v1.6q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25t-1.07.02H5.4q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96Q2 16.7 2 16.1v-1.6a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V7.9q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.4 4.5zm-13.2 2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19C4 7.2 4 7.46 4 7.9v.75a3.5 3.5 0 0 1 0 6.7v.75a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02H13V16a1 1 0 1 1 2 0v1.5h3.6a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-.75a3.5 3.5 0 0 1 0-6.7V7.9a13 13 0 0 0-.05-1.13.5.5 0 0 0-.22-.22h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02H15V8a1 1 0 1 1-2 0V6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketBold.displayName = 'TicketBold';

// Triple export pattern (lucide-react style)
export { TicketBold, TicketBold as TicketBoldIcon, TicketBold as SiTicketBold };
export default TicketBold;
export type { TicketBoldProps };

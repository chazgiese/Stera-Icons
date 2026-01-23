import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketRegularDuotone = memo(
  forwardRef<SVGSVGElement, TicketRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket-duotone" {...props}>
      <path d="M15 15.25c.41 0 .75.34.75.75v2.25h-1.5V16c0-.41.34-.75.75-.75M15 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M15.75 5.75V8a.75.75 0 0 1-1.5 0V5.75z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20 4.25A2.75 2.75 0 0 1 22.75 7v2c0 .41-.34.75-.75.75a2.25 2.25 0 0 0 0 4.5c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17v-2c0-.41.34-.75.75-.75a2.25 2.25 0 0 0 0-4.5.75.75 0 0 1-.75-.75V7A2.75 2.75 0 0 1 4 4.25zM4 5.75c-.69 0-1.25.56-1.25 1.25v1.32a3.75 3.75 0 0 1 0 7.35V17c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25v-1.33a3.75 3.75 0 0 1 0-7.35V7c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketRegularDuotone.displayName = 'TicketRegularDuotone';

// Triple export pattern (lucide-react style)
export { TicketRegularDuotone, TicketRegularDuotone as TicketRegularDuotoneIcon, TicketRegularDuotone as SiTicketRegularDuotone };
export default TicketRegularDuotone;
export type { TicketRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TicketRegularProps = Omit<IconBaseProps, 'children'>;

const TicketRegular = memo(
  forwardRef<SVGSVGElement, TicketRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="ticket" {...props}>
      <path fill="currentColor" d="M15 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M20 4.25A2.75 2.75 0 0 1 22.75 7v2c0 .41-.34.75-.75.75a2.25 2.25 0 0 0 0 4.5c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17v-2c0-.41.34-.75.75-.75a2.25 2.25 0 0 0 0-4.5.75.75 0 0 1-.75-.75V7A2.75 2.75 0 0 1 4 4.25zM4 5.75c-.69 0-1.25.56-1.25 1.25v1.32a3.75 3.75 0 0 1 0 7.35V17c0 .69.56 1.25 1.25 1.25h10.25V16a.75.75 0 0 1 1.5 0v2.25H20c.69 0 1.25-.56 1.25-1.25v-1.33a3.75 3.75 0 0 1 0-7.35V7c0-.69-.56-1.25-1.25-1.25h-4.25V8a.75.75 0 0 1-1.5 0V5.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketRegular.displayName = 'TicketRegular';

// Triple export pattern (lucide-react style)
export { TicketRegular, TicketRegular as TicketRegularIcon, TicketRegular as SiTicketRegular };
export type { TicketRegularProps };

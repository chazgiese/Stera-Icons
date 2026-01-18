import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TicketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketFillDuotone = memo(
  forwardRef<SVGSVGElement, TicketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 16a1 1 0 0 1 1 1v2.5h-2V17a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 4.5V7a1 1 0 1 1-2 0V4.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M20 4.5A2.5 2.5 0 0 1 22.5 7v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5v2a2.5 2.5 0 0 1-2.5 2.5h-4V17a1 1 0 1 0-2 0v2.5H4A2.5 2.5 0 0 1 1.5 17v-2c0-.28.22-.5.5-.5a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7A2.5 2.5 0 0 1 4 4.5h10V7a1 1 0 1 0 2 0V4.5zM15 10a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TicketFillDuotone.displayName = 'TicketFillDuotone';

export { TicketFillDuotone };
export type { TicketFillDuotoneProps };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TicketRegular } from './TicketRegular.js';
import { TicketRegularDuotone } from './TicketRegularDuotone.js';
import { TicketBold } from './TicketBold.js';
import { TicketBoldDuotone } from './TicketBoldDuotone.js';
import { TicketFill } from './TicketFill.js';
import { TicketFillDuotone } from './TicketFillDuotone.js';

export interface TicketProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Ticket - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TicketRegular } from 'stera-icons/icons/TicketRegular';
 */
const Ticket = memo(forwardRef<SVGSVGElement, TicketProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TicketBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TicketBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TicketFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TicketFill ref={ref} {...rest} />;
  if (duotone) return <TicketRegularDuotone ref={ref} {...rest} />;
  return <TicketRegular ref={ref} {...rest} />;
}));

Ticket.displayName = 'Ticket';

// Triple export pattern (lucide-react style)
export { Ticket, Ticket as TicketIcon, Ticket as SiTicket };
export default Ticket;

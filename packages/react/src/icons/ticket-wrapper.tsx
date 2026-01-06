import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TicketIcon as RegularTicketIcon } from './ticket';
import { TicketIconDuotone as TicketIconDuotone } from './ticket-duotone';
import { TicketIconBold as TicketIconBold } from './ticket-bold';
import { TicketIconBoldDuotone as TicketIconBoldDuotone } from './ticket-bold-duotone';
import { TicketIconFill as TicketIconFill } from './ticket-fill';
import { TicketIconFillDuotone as TicketIconFillDuotone } from './ticket-fill-duotone';

export interface TicketIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TicketIcon = memo(forwardRef<SVGSVGElement, TicketIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TicketIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TicketIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TicketIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TicketIconFill ref={ref} {...props} />;
  if (duotone) return <TicketIconDuotone ref={ref} {...props} />;
  return <RegularTicketIcon ref={ref} {...props} />;
}));

TicketIcon.displayName = 'TicketIcon';

export { TicketIcon };

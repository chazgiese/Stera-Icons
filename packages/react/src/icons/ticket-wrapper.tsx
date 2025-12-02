import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TicketIcon as RegularTicketIcon } from './ticket';
import { TicketIconBold } from './ticket-bold';
import { TicketIconFilled } from './ticket-filled';
import { TicketIconFilltone } from './ticket-filltone';
import { TicketIconLinetone } from './ticket-linetone';

export interface TicketIconProps extends IconProps {
  variant?: IconVariant;
}

const TicketIcon = memo(forwardRef<SVGSVGElement, TicketIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TicketIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TicketIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TicketIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TicketIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTicketIcon ref={ref} {...props} />;
  }
}));

TicketIcon.displayName = 'TicketIcon';

export { TicketIcon };

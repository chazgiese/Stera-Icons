import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarIcon as CalendarIconRegular } from './calendar';
import { CalendarIconBold } from './calendar-bold';
import { CalendarIconFilled } from './calendar-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CalendarIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarIcon = memo(forwardRef<SVGSVGElement, CalendarIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CalendarIconRegular ref={ref} {...props} />;
  }
}));

CalendarIcon.displayName = 'CalendarIcon';

export { CalendarIcon };

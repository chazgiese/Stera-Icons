import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CalendarPlusIcon as CalendarPlusIconRegular } from './calendar-plus';
import { CalendarPlusIconBold } from './calendar-plus-bold';
import { CalendarPlusIconFilled } from './calendar-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CalendarPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const CalendarPlusIcon = memo(forwardRef<SVGSVGElement, CalendarPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CalendarPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CalendarPlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CalendarPlusIconRegular ref={ref} {...props} />;
  }
}));

CalendarPlusIcon.displayName = 'CalendarPlusIcon';

export { CalendarPlusIcon };

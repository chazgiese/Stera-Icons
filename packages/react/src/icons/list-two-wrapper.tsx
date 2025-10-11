import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListTwoIcon as ListTwoIconRegular } from './list-two';
import { ListTwoIconBold } from './list-two-bold';
import { ListTwoIconFilled } from './list-two-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ListTwoIconProps extends IconProps {
  variant?: IconVariant;
}

const ListTwoIcon = memo(forwardRef<SVGSVGElement, ListTwoIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListTwoIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListTwoIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListTwoIconRegular ref={ref} {...props} />;
  }
}));

ListTwoIcon.displayName = 'ListTwoIcon';

export { ListTwoIcon };

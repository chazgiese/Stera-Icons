import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckTwoIcon as ListCheckTwoIconRegular } from './list-check-two';
import { ListCheckTwoIconBold } from './list-check-two-bold';
import { ListCheckTwoIconFilled } from './list-check-two-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ListCheckTwoIconProps extends IconProps {
  variant?: IconVariant;
}

const ListCheckTwoIcon = memo(forwardRef<SVGSVGElement, ListCheckTwoIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListCheckTwoIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListCheckTwoIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListCheckTwoIconRegular ref={ref} {...props} />;
  }
}));

ListCheckTwoIcon.displayName = 'ListCheckTwoIcon';

export { ListCheckTwoIcon };

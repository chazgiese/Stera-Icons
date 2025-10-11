import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListIcon as ListIconRegular } from './list';
import { ListIconBold } from './list-bold';
import { ListIconFilled } from './list-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ListIconProps extends IconProps {
  variant?: IconVariant;
}

const ListIcon = memo(forwardRef<SVGSVGElement, ListIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListIconRegular ref={ref} {...props} />;
  }
}));

ListIcon.displayName = 'ListIcon';

export { ListIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListTreeIcon as RegularListTreeIcon } from './list-tree';
import { ListTreeIconBold } from './list-tree-bold';
import { ListTreeIconFilled } from './list-tree-filled';
import { ListTreeIconFilltone } from './list-tree-filltone';
import { ListTreeIconLinetone } from './list-tree-linetone';

export interface ListTreeIconProps extends IconProps {
  variant?: IconVariant;
}

const ListTreeIcon = memo(forwardRef<SVGSVGElement, ListTreeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListTreeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListTreeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListTreeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListTreeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListTreeIcon ref={ref} {...props} />;
  }
}));

ListTreeIcon.displayName = 'ListTreeIcon';

export { ListTreeIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListExpandIcon as RegularListExpandIcon } from './list-expand';
import { ListExpandIconBold } from './list-expand-bold';
import { ListExpandIconFilled } from './list-expand-filled';
import { ListExpandIconFilltone } from './list-expand-filltone';
import { ListExpandIconLinetone } from './list-expand-linetone';

export interface ListExpandIconProps extends IconProps {
  variant?: IconVariant;
}

const ListExpandIcon = memo(forwardRef<SVGSVGElement, ListExpandIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListExpandIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListExpandIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListExpandIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListExpandIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListExpandIcon ref={ref} {...props} />;
  }
}));

ListExpandIcon.displayName = 'ListExpandIcon';

export { ListExpandIcon };

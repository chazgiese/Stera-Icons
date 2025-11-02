import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListPlusIcon as RegularListPlusIcon } from './list-plus';
import { ListPlusIconBold } from './list-plus-bold';
import { ListPlusIconFilled } from './list-plus-filled';
import { ListPlusIconFilltone } from './list-plus-filltone';
import { ListPlusIconLinetone } from './list-plus-linetone';

export interface ListPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const ListPlusIcon = memo(forwardRef<SVGSVGElement, ListPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListPlusIcon ref={ref} {...props} />;
  }
}));

ListPlusIcon.displayName = 'ListPlusIcon';

export { ListPlusIcon };

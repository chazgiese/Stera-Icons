import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListXIcon as RegularListXIcon } from './list-x';
import { ListXIconBold } from './list-x-bold';
import { ListXIconFilled } from './list-x-filled';
import { ListXIconFilltone } from './list-x-filltone';
import { ListXIconLinetone } from './list-x-linetone';

export interface ListXIconProps extends IconProps {
  variant?: IconVariant;
}

const ListXIcon = memo(forwardRef<SVGSVGElement, ListXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListXIcon ref={ref} {...props} />;
  }
}));

ListXIcon.displayName = 'ListXIcon';

export { ListXIcon };

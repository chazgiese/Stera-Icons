import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListCheckIcon as ListCheckIconRegular } from './list-check';
import { ListCheckIconBold } from './list-check-bold';
import { ListCheckIconFilled } from './list-check-filled';
import { ListCheckIconFilltone } from './list-check-filltone';
import { ListCheckIconLinetone } from './list-check-linetone';

export interface ListCheckIconProps extends IconProps {
  variant?: IconVariant;
}

const ListCheckIcon = memo(forwardRef<SVGSVGElement, ListCheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListCheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListCheckIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListCheckIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListCheckIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListCheckIconRegular ref={ref} {...props} />;
  }
}));

ListCheckIcon.displayName = 'ListCheckIcon';

export { ListCheckIcon };

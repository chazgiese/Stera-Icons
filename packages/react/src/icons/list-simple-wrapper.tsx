import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListSimpleIcon as ListSimpleIconRegular } from './list-simple';
import { ListSimpleIconBold } from './list-simple-bold';
import { ListSimpleIconFilled } from './list-simple-filled';
import { ListSimpleIconFilltone } from './list-simple-filltone';
import { ListSimpleIconLinetone } from './list-simple-linetone';

export interface ListSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const ListSimpleIcon = memo(forwardRef<SVGSVGElement, ListSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListSimpleIconRegular ref={ref} {...props} />;
  }
}));

ListSimpleIcon.displayName = 'ListSimpleIcon';

export { ListSimpleIcon };

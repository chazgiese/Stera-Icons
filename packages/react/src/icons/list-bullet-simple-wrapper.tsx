import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListBulletSimpleIcon as RegularListBulletSimpleIcon } from './list-bullet-simple';
import { ListBulletSimpleIconBold } from './list-bullet-simple-bold';
import { ListBulletSimpleIconFilled } from './list-bullet-simple-filled';
import { ListBulletSimpleIconFilltone } from './list-bullet-simple-filltone';
import { ListBulletSimpleIconLinetone } from './list-bullet-simple-linetone';

export interface ListBulletSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const ListBulletSimpleIcon = memo(forwardRef<SVGSVGElement, ListBulletSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListBulletSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListBulletSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListBulletSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListBulletSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListBulletSimpleIcon ref={ref} {...props} />;
  }
}));

ListBulletSimpleIcon.displayName = 'ListBulletSimpleIcon';

export { ListBulletSimpleIcon };

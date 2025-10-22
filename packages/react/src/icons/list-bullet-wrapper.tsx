import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListBulletIcon as ListBulletIconRegular } from './list-bullet';
import { ListBulletIconBold } from './list-bullet-bold';
import { ListBulletIconFilled } from './list-bullet-filled';
import { ListBulletIconFilltone } from './list-bullet-filltone';
import { ListBulletIconLinetone } from './list-bullet-linetone';

export interface ListBulletIconProps extends IconProps {
  variant?: IconVariant;
}

const ListBulletIcon = memo(forwardRef<SVGSVGElement, ListBulletIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListBulletIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListBulletIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListBulletIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListBulletIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListBulletIconRegular ref={ref} {...props} />;
  }
}));

ListBulletIcon.displayName = 'ListBulletIcon';

export { ListBulletIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletIcon as ListBulletIconRegular } from './list-bullet';
import { ListBulletIconBold } from './list-bullet-bold';
import { ListBulletIconFilled } from './list-bullet-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ListBulletIconRegular ref={ref} {...props} />;
  }
}));

ListBulletIcon.displayName = 'ListBulletIcon';

export { ListBulletIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletTwoIcon as ListBulletTwoIconRegular } from './list-bullet-two';
import { ListBulletTwoIconBold } from './list-bullet-two-bold';
import { ListBulletTwoIconFilled } from './list-bullet-two-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ListBulletTwoIconProps extends IconProps {
  variant?: IconVariant;
}

const ListBulletTwoIcon = memo(forwardRef<SVGSVGElement, ListBulletTwoIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListBulletTwoIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListBulletTwoIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListBulletTwoIconRegular ref={ref} {...props} />;
  }
}));

ListBulletTwoIcon.displayName = 'ListBulletTwoIcon';

export { ListBulletTwoIcon };

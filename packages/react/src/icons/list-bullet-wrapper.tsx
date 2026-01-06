import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletIcon as RegularListBulletIcon } from './list-bullet';
import { ListBulletIconDuotone as ListBulletIconDuotone } from './list-bullet-duotone';
import { ListBulletIconBold as ListBulletIconBold } from './list-bullet-bold';
import { ListBulletIconBoldDuotone as ListBulletIconBoldDuotone } from './list-bullet-bold-duotone';
import { ListBulletIconFill as ListBulletIconFill } from './list-bullet-fill';
import { ListBulletIconFillDuotone as ListBulletIconFillDuotone } from './list-bullet-fill-duotone';

export interface ListBulletIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListBulletIcon = memo(forwardRef<SVGSVGElement, ListBulletIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListBulletIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListBulletIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListBulletIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListBulletIconFill ref={ref} {...props} />;
  if (duotone) return <ListBulletIconDuotone ref={ref} {...props} />;
  return <RegularListBulletIcon ref={ref} {...props} />;
}));

ListBulletIcon.displayName = 'ListBulletIcon';

export { ListBulletIcon };

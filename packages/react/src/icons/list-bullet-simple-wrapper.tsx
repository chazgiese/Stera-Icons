import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListBulletSimpleIcon as RegularListBulletSimpleIcon } from './list-bullet-simple';
import { ListBulletSimpleIconDuotone as ListBulletSimpleIconDuotone } from './list-bullet-simple-duotone';
import { ListBulletSimpleIconBold as ListBulletSimpleIconBold } from './list-bullet-simple-bold';
import { ListBulletSimpleIconBoldDuotone as ListBulletSimpleIconBoldDuotone } from './list-bullet-simple-bold-duotone';
import { ListBulletSimpleIconFill as ListBulletSimpleIconFill } from './list-bullet-simple-fill';
import { ListBulletSimpleIconFillDuotone as ListBulletSimpleIconFillDuotone } from './list-bullet-simple-fill-duotone';

export interface ListBulletSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListBulletSimpleIcon = memo(forwardRef<SVGSVGElement, ListBulletSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListBulletSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListBulletSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListBulletSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListBulletSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <ListBulletSimpleIconDuotone ref={ref} {...props} />;
  return <RegularListBulletSimpleIcon ref={ref} {...props} />;
}));

ListBulletSimpleIcon.displayName = 'ListBulletSimpleIcon';

export { ListBulletSimpleIcon };

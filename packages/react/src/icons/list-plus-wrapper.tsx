import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListPlusIcon as RegularListPlusIcon } from './list-plus';
import { ListPlusIconDuotone as ListPlusIconDuotone } from './list-plus-duotone';
import { ListPlusIconBold as ListPlusIconBold } from './list-plus-bold';
import { ListPlusIconBoldDuotone as ListPlusIconBoldDuotone } from './list-plus-bold-duotone';
import { ListPlusIconFill as ListPlusIconFill } from './list-plus-fill';
import { ListPlusIconFillDuotone as ListPlusIconFillDuotone } from './list-plus-fill-duotone';

export interface ListPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListPlusIcon = memo(forwardRef<SVGSVGElement, ListPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListPlusIconFill ref={ref} {...props} />;
  if (duotone) return <ListPlusIconDuotone ref={ref} {...props} />;
  return <RegularListPlusIcon ref={ref} {...props} />;
}));

ListPlusIcon.displayName = 'ListPlusIcon';

export { ListPlusIcon };

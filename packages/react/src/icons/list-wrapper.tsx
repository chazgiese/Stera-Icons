import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListIcon as RegularListIcon } from './list';
import { ListIconDuotone as ListIconDuotone } from './list-duotone';
import { ListIconBold as ListIconBold } from './list-bold';
import { ListIconBoldDuotone as ListIconBoldDuotone } from './list-bold-duotone';
import { ListIconFill as ListIconFill } from './list-fill';
import { ListIconFillDuotone as ListIconFillDuotone } from './list-fill-duotone';

export interface ListIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListIcon = memo(forwardRef<SVGSVGElement, ListIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListIconFill ref={ref} {...props} />;
  if (duotone) return <ListIconDuotone ref={ref} {...props} />;
  return <RegularListIcon ref={ref} {...props} />;
}));

ListIcon.displayName = 'ListIcon';

export { ListIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListTreeIcon as RegularListTreeIcon } from './list-tree';
import { ListTreeIconDuotone as ListTreeIconDuotone } from './list-tree-duotone';
import { ListTreeIconBold as ListTreeIconBold } from './list-tree-bold';
import { ListTreeIconBoldDuotone as ListTreeIconBoldDuotone } from './list-tree-bold-duotone';
import { ListTreeIconFill as ListTreeIconFill } from './list-tree-fill';
import { ListTreeIconFillDuotone as ListTreeIconFillDuotone } from './list-tree-fill-duotone';

export interface ListTreeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListTreeIcon = memo(forwardRef<SVGSVGElement, ListTreeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListTreeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListTreeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListTreeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListTreeIconFill ref={ref} {...props} />;
  if (duotone) return <ListTreeIconDuotone ref={ref} {...props} />;
  return <RegularListTreeIcon ref={ref} {...props} />;
}));

ListTreeIcon.displayName = 'ListTreeIcon';

export { ListTreeIcon };

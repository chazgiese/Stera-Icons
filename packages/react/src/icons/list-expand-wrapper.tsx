import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListExpandIcon as RegularListExpandIcon } from './list-expand';
import { ListExpandIconDuotone as ListExpandIconDuotone } from './list-expand-duotone';
import { ListExpandIconBold as ListExpandIconBold } from './list-expand-bold';
import { ListExpandIconBoldDuotone as ListExpandIconBoldDuotone } from './list-expand-bold-duotone';
import { ListExpandIconFill as ListExpandIconFill } from './list-expand-fill';
import { ListExpandIconFillDuotone as ListExpandIconFillDuotone } from './list-expand-fill-duotone';

export interface ListExpandIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListExpandIcon = memo(forwardRef<SVGSVGElement, ListExpandIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListExpandIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListExpandIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListExpandIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListExpandIconFill ref={ref} {...props} />;
  if (duotone) return <ListExpandIconDuotone ref={ref} {...props} />;
  return <RegularListExpandIcon ref={ref} {...props} />;
}));

ListExpandIcon.displayName = 'ListExpandIcon';

export { ListExpandIcon };

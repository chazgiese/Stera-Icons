import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckIcon as RegularListCheckIcon } from './list-check';
import { ListCheckIconDuotone as ListCheckIconDuotone } from './list-check-duotone';
import { ListCheckIconBold as ListCheckIconBold } from './list-check-bold';
import { ListCheckIconBoldDuotone as ListCheckIconBoldDuotone } from './list-check-bold-duotone';
import { ListCheckIconFill as ListCheckIconFill } from './list-check-fill';
import { ListCheckIconFillDuotone as ListCheckIconFillDuotone } from './list-check-fill-duotone';

export interface ListCheckIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListCheckIcon = memo(forwardRef<SVGSVGElement, ListCheckIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListCheckIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListCheckIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListCheckIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListCheckIconFill ref={ref} {...props} />;
  if (duotone) return <ListCheckIconDuotone ref={ref} {...props} />;
  return <RegularListCheckIcon ref={ref} {...props} />;
}));

ListCheckIcon.displayName = 'ListCheckIcon';

export { ListCheckIcon };

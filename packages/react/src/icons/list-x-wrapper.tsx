import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListXIcon as RegularListXIcon } from './list-x';
import { ListXIconDuotone as ListXIconDuotone } from './list-x-duotone';
import { ListXIconBold as ListXIconBold } from './list-x-bold';
import { ListXIconBoldDuotone as ListXIconBoldDuotone } from './list-x-bold-duotone';
import { ListXIconFill as ListXIconFill } from './list-x-fill';
import { ListXIconFillDuotone as ListXIconFillDuotone } from './list-x-fill-duotone';

export interface ListXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListXIcon = memo(forwardRef<SVGSVGElement, ListXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListXIconFill ref={ref} {...props} />;
  if (duotone) return <ListXIconDuotone ref={ref} {...props} />;
  return <RegularListXIcon ref={ref} {...props} />;
}));

ListXIcon.displayName = 'ListXIcon';

export { ListXIcon };

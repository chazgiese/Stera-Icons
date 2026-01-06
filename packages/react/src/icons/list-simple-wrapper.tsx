import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListSimpleIcon as RegularListSimpleIcon } from './list-simple';
import { ListSimpleIconDuotone as ListSimpleIconDuotone } from './list-simple-duotone';
import { ListSimpleIconBold as ListSimpleIconBold } from './list-simple-bold';
import { ListSimpleIconBoldDuotone as ListSimpleIconBoldDuotone } from './list-simple-bold-duotone';
import { ListSimpleIconFill as ListSimpleIconFill } from './list-simple-fill';
import { ListSimpleIconFillDuotone as ListSimpleIconFillDuotone } from './list-simple-fill-duotone';

export interface ListSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListSimpleIcon = memo(forwardRef<SVGSVGElement, ListSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <ListSimpleIconDuotone ref={ref} {...props} />;
  return <RegularListSimpleIcon ref={ref} {...props} />;
}));

ListSimpleIcon.displayName = 'ListSimpleIcon';

export { ListSimpleIcon };

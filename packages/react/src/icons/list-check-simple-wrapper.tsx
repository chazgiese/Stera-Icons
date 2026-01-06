import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckSimpleIcon as RegularListCheckSimpleIcon } from './list-check-simple';
import { ListCheckSimpleIconDuotone as ListCheckSimpleIconDuotone } from './list-check-simple-duotone';
import { ListCheckSimpleIconBold as ListCheckSimpleIconBold } from './list-check-simple-bold';
import { ListCheckSimpleIconBoldDuotone as ListCheckSimpleIconBoldDuotone } from './list-check-simple-bold-duotone';
import { ListCheckSimpleIconFill as ListCheckSimpleIconFill } from './list-check-simple-fill';
import { ListCheckSimpleIconFillDuotone as ListCheckSimpleIconFillDuotone } from './list-check-simple-fill-duotone';

export interface ListCheckSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListCheckSimpleIcon = memo(forwardRef<SVGSVGElement, ListCheckSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListCheckSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListCheckSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListCheckSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListCheckSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <ListCheckSimpleIconDuotone ref={ref} {...props} />;
  return <RegularListCheckSimpleIcon ref={ref} {...props} />;
}));

ListCheckSimpleIcon.displayName = 'ListCheckSimpleIcon';

export { ListCheckSimpleIcon };

import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListMinusIcon as RegularListMinusIcon } from './list-minus';
import { ListMinusIconDuotone as ListMinusIconDuotone } from './list-minus-duotone';
import { ListMinusIconBold as ListMinusIconBold } from './list-minus-bold';
import { ListMinusIconBoldDuotone as ListMinusIconBoldDuotone } from './list-minus-bold-duotone';
import { ListMinusIconFill as ListMinusIconFill } from './list-minus-fill';
import { ListMinusIconFillDuotone as ListMinusIconFillDuotone } from './list-minus-fill-duotone';

export interface ListMinusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ListMinusIcon = memo(forwardRef<SVGSVGElement, ListMinusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListMinusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ListMinusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ListMinusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ListMinusIconFill ref={ref} {...props} />;
  if (duotone) return <ListMinusIconDuotone ref={ref} {...props} />;
  return <RegularListMinusIcon ref={ref} {...props} />;
}));

ListMinusIcon.displayName = 'ListMinusIcon';

export { ListMinusIcon };

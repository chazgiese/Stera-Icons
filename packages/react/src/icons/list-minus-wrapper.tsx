import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListMinusIcon as RegularListMinusIcon } from './list-minus';
import { ListMinusIconBold } from './list-minus-bold';
import { ListMinusIconFilled } from './list-minus-filled';
import { ListMinusIconFilltone } from './list-minus-filltone';
import { ListMinusIconLinetone } from './list-minus-linetone';

export interface ListMinusIconProps extends IconProps {
  variant?: IconVariant;
}

const ListMinusIcon = memo(forwardRef<SVGSVGElement, ListMinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListMinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListMinusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListMinusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListMinusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularListMinusIcon ref={ref} {...props} />;
  }
}));

ListMinusIcon.displayName = 'ListMinusIcon';

export { ListMinusIcon };

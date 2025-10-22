import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ListCheckSimpleIcon as ListCheckSimpleIconRegular } from './list-check-simple';
import { ListCheckSimpleIconBold } from './list-check-simple-bold';
import { ListCheckSimpleIconFilled } from './list-check-simple-filled';
import { ListCheckSimpleIconFilltone } from './list-check-simple-filltone';
import { ListCheckSimpleIconLinetone } from './list-check-simple-linetone';

export interface ListCheckSimpleIconProps extends IconProps {
  variant?: IconVariant;
}

const ListCheckSimpleIcon = memo(forwardRef<SVGSVGElement, ListCheckSimpleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListCheckSimpleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListCheckSimpleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ListCheckSimpleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ListCheckSimpleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListCheckSimpleIconRegular ref={ref} {...props} />;
  }
}));

ListCheckSimpleIcon.displayName = 'ListCheckSimpleIcon';

export { ListCheckSimpleIcon };

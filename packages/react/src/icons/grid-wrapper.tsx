import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GridIcon as GridIconRegular } from './grid';
import { GridIconBold } from './grid-bold';
import { GridIconFilled } from './grid-filled';
import { GridIconFilltone } from './grid-filltone';
import { GridIconLinetone } from './grid-linetone';

export interface GridIconProps extends IconProps {
  variant?: IconVariant;
}

const GridIcon = memo(forwardRef<SVGSVGElement, GridIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GridIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GridIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GridIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GridIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <GridIconRegular ref={ref} {...props} />;
  }
}));

GridIcon.displayName = 'GridIcon';

export { GridIcon };

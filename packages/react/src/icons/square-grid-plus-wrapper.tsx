import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SquareGridPlusIcon as SquareGridPlusIconRegular } from './square-grid-plus';
import { SquareGridPlusIconBold } from './square-grid-plus-bold';
import { SquareGridPlusIconFilled } from './square-grid-plus-filled';
import { SquareGridPlusIconFilltone } from './square-grid-plus-filltone';
import { SquareGridPlusIconLinetone } from './square-grid-plus-linetone';

export interface SquareGridPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const SquareGridPlusIcon = memo(forwardRef<SVGSVGElement, SquareGridPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SquareGridPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SquareGridPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SquareGridPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SquareGridPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SquareGridPlusIconRegular ref={ref} {...props} />;
  }
}));

SquareGridPlusIcon.displayName = 'SquareGridPlusIcon';

export { SquareGridPlusIcon };

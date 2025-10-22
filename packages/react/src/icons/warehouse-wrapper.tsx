import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WarehouseIcon as WarehouseIconRegular } from './warehouse';
import { WarehouseIconBold } from './warehouse-bold';
import { WarehouseIconFilled } from './warehouse-filled';
import { WarehouseIconFilltone } from './warehouse-filltone';
import { WarehouseIconLinetone } from './warehouse-linetone';

export interface WarehouseIconProps extends IconProps {
  variant?: IconVariant;
}

const WarehouseIcon = memo(forwardRef<SVGSVGElement, WarehouseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WarehouseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WarehouseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WarehouseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WarehouseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <WarehouseIconRegular ref={ref} {...props} />;
  }
}));

WarehouseIcon.displayName = 'WarehouseIcon';

export { WarehouseIcon };

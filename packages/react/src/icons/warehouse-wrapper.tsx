import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WarehouseIcon as WarehouseIconRegular } from './warehouse';
import { WarehouseIconBold } from './warehouse-bold';
import { WarehouseIconFilled } from './warehouse-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WarehouseIconRegular ref={ref} {...props} />;
  }
}));

WarehouseIcon.displayName = 'WarehouseIcon';

export { WarehouseIcon };

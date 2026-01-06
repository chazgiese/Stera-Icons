import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WarehouseIcon as RegularWarehouseIcon } from './warehouse';
import { WarehouseIconDuotone as WarehouseIconDuotone } from './warehouse-duotone';
import { WarehouseIconBold as WarehouseIconBold } from './warehouse-bold';
import { WarehouseIconBoldDuotone as WarehouseIconBoldDuotone } from './warehouse-bold-duotone';
import { WarehouseIconFill as WarehouseIconFill } from './warehouse-fill';
import { WarehouseIconFillDuotone as WarehouseIconFillDuotone } from './warehouse-fill-duotone';

export interface WarehouseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const WarehouseIcon = memo(forwardRef<SVGSVGElement, WarehouseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <WarehouseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <WarehouseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <WarehouseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <WarehouseIconFill ref={ref} {...props} />;
  if (duotone) return <WarehouseIconDuotone ref={ref} {...props} />;
  return <RegularWarehouseIcon ref={ref} {...props} />;
}));

WarehouseIcon.displayName = 'WarehouseIcon';

export { WarehouseIcon };

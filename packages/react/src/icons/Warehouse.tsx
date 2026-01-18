import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WarehouseRegular } from './WarehouseRegular';
import { WarehouseRegularDuotone } from './WarehouseRegularDuotone';
import { WarehouseBold } from './WarehouseBold';
import { WarehouseBoldDuotone } from './WarehouseBoldDuotone';
import { WarehouseFill } from './WarehouseFill';
import { WarehouseFillDuotone } from './WarehouseFillDuotone';

export interface WarehouseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Warehouse with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { WarehouseRegular } from 'stera-icons/WarehouseRegular';
 */
const Warehouse = memo(forwardRef<SVGSVGElement, WarehouseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <WarehouseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <WarehouseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <WarehouseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <WarehouseFill ref={ref} {...rest} />;
  if (duotone) return <WarehouseRegularDuotone ref={ref} {...rest} />;
  return <WarehouseRegular ref={ref} {...rest} />;
}));

Warehouse.displayName = 'Warehouse';

export { Warehouse };

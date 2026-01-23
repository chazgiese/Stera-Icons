import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { WarehouseRegular } from './WarehouseRegular.js';
import { WarehouseRegularDuotone } from './WarehouseRegularDuotone.js';
import { WarehouseBold } from './WarehouseBold.js';
import { WarehouseBoldDuotone } from './WarehouseBoldDuotone.js';
import { WarehouseFill } from './WarehouseFill.js';
import { WarehouseFillDuotone } from './WarehouseFillDuotone.js';

export interface WarehouseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Warehouse - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { WarehouseRegular } from 'stera-icons/icons/WarehouseRegular';
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

// Triple export pattern (lucide-react style)
export { Warehouse, Warehouse as WarehouseIcon, Warehouse as SiWarehouse };
export default Warehouse;

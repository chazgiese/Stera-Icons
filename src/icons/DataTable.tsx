import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DataTableRegular } from './DataTableRegular';
import { DataTableRegularDuotone } from './DataTableRegularDuotone';
import { DataTableBold } from './DataTableBold';
import { DataTableBoldDuotone } from './DataTableBoldDuotone';
import { DataTableFill } from './DataTableFill';
import { DataTableFillDuotone } from './DataTableFillDuotone';

export interface DataTableProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DataTable - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DataTableRegular } from 'stera-icons/icons/DataTableRegular';
 */
const DataTable = memo(forwardRef<SVGSVGElement, DataTableProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DataTableBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DataTableBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DataTableFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DataTableFill ref={ref} {...rest} />;
  if (duotone) return <DataTableRegularDuotone ref={ref} {...rest} />;
  return <DataTableRegular ref={ref} {...rest} />;
}));

DataTable.displayName = 'DataTable';

// Triple export pattern (lucide-react style)
export { DataTable, DataTable as DataTableIcon, DataTable as SiDataTable };

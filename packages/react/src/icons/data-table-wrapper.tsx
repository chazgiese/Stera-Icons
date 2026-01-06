import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DataTableIcon as RegularDataTableIcon } from './data-table';
import { DataTableIconDuotone as DataTableIconDuotone } from './data-table-duotone';
import { DataTableIconBold as DataTableIconBold } from './data-table-bold';
import { DataTableIconBoldDuotone as DataTableIconBoldDuotone } from './data-table-bold-duotone';
import { DataTableIconFill as DataTableIconFill } from './data-table-fill';
import { DataTableIconFillDuotone as DataTableIconFillDuotone } from './data-table-fill-duotone';

export interface DataTableIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DataTableIcon = memo(forwardRef<SVGSVGElement, DataTableIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DataTableIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DataTableIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DataTableIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DataTableIconFill ref={ref} {...props} />;
  if (duotone) return <DataTableIconDuotone ref={ref} {...props} />;
  return <RegularDataTableIcon ref={ref} {...props} />;
}));

DataTableIcon.displayName = 'DataTableIcon';

export { DataTableIcon };

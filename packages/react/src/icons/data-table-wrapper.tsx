import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DataTableIcon as DataTableIconRegular } from './data-table';
import { DataTableIconBold } from './data-table-bold';
import { DataTableIconFilled } from './data-table-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DataTableIconProps extends IconProps {
  variant?: IconVariant;
}

const DataTableIcon = memo(forwardRef<SVGSVGElement, DataTableIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DataTableIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DataTableIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DataTableIconRegular ref={ref} {...props} />;
  }
}));

DataTableIcon.displayName = 'DataTableIcon';

export { DataTableIcon };

import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DataTableIcon as DataTableIconRegular } from './data-table';
import { DataTableIconBold } from './data-table-bold';
import { DataTableIconFilled } from './data-table-filled';
import { DataTableIconFilltone } from './data-table-filltone';
import { DataTableIconLinetone } from './data-table-linetone';

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
    case 'filltone':
      return <DataTableIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DataTableIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DataTableIconRegular ref={ref} {...props} />;
  }
}));

DataTableIcon.displayName = 'DataTableIcon';

export { DataTableIcon };

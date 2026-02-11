import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableFillProps = Omit<IconBaseProps, 'children'>;

const DataTableFill = memo(
  forwardRef<SVGSVGElement, DataTableFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-fill" {...props}>
      <path d="M7.5 20.5H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-.13h5.5zM22 16.3q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H9.5v-4.33H22zM7.5 14.17H2V9.83h5.5zM22 14.17H9.5V9.83H22zM7.5 7.83H2V7.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03h1.3zM17.8 3.5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v.13H9.5V3.5z" />
    </IconBase>
  ))
);

DataTableFill.displayName = 'DataTableFill';

// Triple export pattern (lucide-react style)
export { DataTableFill, DataTableFill as DataTableFillIcon, DataTableFill as SiDataTableFill };
export default DataTableFill;
export type { DataTableFillProps };

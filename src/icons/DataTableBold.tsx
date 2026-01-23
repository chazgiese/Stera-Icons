import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableBoldProps = Omit<IconBaseProps, 'children'>;

const DataTableBold = memo(
  forwardRef<SVGSVGElement, DataTableBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3zM3 15.67q-.01.89.04 1.42c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H7v-3.33zm6 0V19h8.2c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82q.04-.52.04-1.42zm-6-2h4v-3.34H3zm6 0h12v-3.34H9zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q3 7.43 3 8.33h4V5zM9 8.33h12q.01-.89-.04-1.42c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableBold.displayName = 'DataTableBold';

// Triple export pattern (lucide-react style)
export { DataTableBold, DataTableBold as DataTableBoldIcon, DataTableBold as SiDataTableBold };
export default DataTableBold;
export type { DataTableBoldProps };

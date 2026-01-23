import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DataTableBoldDuotone = memo(
  forwardRef<SVGSVGElement, DataTableBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-bold-duotone" {...props}>
      <path fill="currentColor" d="M17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9v-2h8.2c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82q.04-.52.04-1.42H9v-2h12v-3.34H9v-2h12q.01-.89-.04-1.42c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C18.64 5 18.06 5 17.2 5H9V3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 21H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3H9zm-6-5.33q-.01.89.04 1.42c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H7v-3.33zm0-2h4v-3.34H3zM6.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q3 7.43 3 8.33h4V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableBoldDuotone.displayName = 'DataTableBoldDuotone';

// Triple export pattern (lucide-react style)
export { DataTableBoldDuotone, DataTableBoldDuotone as DataTableBoldDuotoneIcon, DataTableBoldDuotone as SiDataTableBoldDuotone };
export default DataTableBoldDuotone;
export type { DataTableBoldDuotoneProps };

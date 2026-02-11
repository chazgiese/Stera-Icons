import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DataTableBoldDuotone = memo(
  forwardRef<SVGSVGElement, DataTableBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-bold-duotone" {...props}>
      <path d="M16.2 3.5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v5.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.5v-2h6.7c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82q.04-.43.04-1.09H9.5v-2H20v-3H9.5v-2H20q0-.66-.04-1.09c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18c-.45-.04-1.03-.04-1.89-.04H9.5v-2z" opacity={.4} />
        <path fillRule="evenodd" d="M9.5 20.5H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.93 2 14.7V9.3q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.82-.05 2.05-.04h1.7zm-5.5-5q0 .66.04 1.09c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.4.04.9.04 1.59.04v-3zm0-2h3.5v-3H4zm3.5-8c-.7 0-1.2 0-1.59.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82Q4 7.84 4 8.5h3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableBoldDuotone.displayName = 'DataTableBoldDuotone';

// Triple export pattern (lucide-react style)
export { DataTableBoldDuotone, DataTableBoldDuotone as DataTableBoldDuotoneIcon, DataTableBoldDuotone as SiDataTableBoldDuotone };
export default DataTableBoldDuotone;
export type { DataTableBoldDuotoneProps };

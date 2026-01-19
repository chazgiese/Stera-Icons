import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DataTableFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DataTableFillDuotone = memo(
  forwardRef<SVGSVGElement, DataTableFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-fill-duotone" {...props}>
      <path d="m23 16.33-.04.92a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9v-4.67zM23 14.33H9V9.67h14zM17.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57l.04.92H9V3z" opacity={0.4} />
        <path fill="currentColor" d="M7 21h-.2q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57L1 16.33h6zM7 14.33H1V9.67h6zM7 7.67H1l.04-.92a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q5.57 3 6.8 3H7z" />
    </IconBase>
  ))
);

DataTableFillDuotone.displayName = 'DataTableFillDuotone';

// Triple export pattern (lucide-react style)
export { DataTableFillDuotone, DataTableFillDuotone as DataTableFillDuotoneIcon, DataTableFillDuotone as SiDataTableFillDuotone };
export type { DataTableFillDuotoneProps };

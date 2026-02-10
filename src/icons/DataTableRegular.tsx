import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableRegularProps = Omit<IconBaseProps, 'children'>;

const DataTableRegular = memo(
  forwardRef<SVGSVGElement, DataTableRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.2 3.75q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v5.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.3q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-6.95 11.5v3.5h6.95c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91q.04-.52.04-1.36zm-5.5 0q-.01.84.04 1.36c.04.45.1.71.2.91q.35.65.99.98c.2.1.46.17.91.21s1.03.04 1.86.04v-3.5zm0-1.5h4v-3.5h-4zm5.5 0h11v-3.5h-11zm-1.5-8.5c-.83 0-1.4 0-1.86.04-.45.04-.71.1-.91.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.04.53-.04 1.36h4zm1.5 3.5h11q.01-.84-.04-1.36a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H9.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableRegular.displayName = 'DataTableRegular';

// Triple export pattern (lucide-react style)
export { DataTableRegular, DataTableRegular as DataTableRegularIcon, DataTableRegular as SiDataTableRegular };
export default DataTableRegular;
export type { DataTableRegularProps };

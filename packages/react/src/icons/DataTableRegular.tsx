import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DataTableRegularProps = Omit<IconBaseProps, 'children'>;

const DataTableRegular = memo(
  forwardRef<SVGSVGElement, DataTableRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM2.75 15.42q-.01 1.08.04 1.69c.04.45.1.71.2.91q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h.45v-3.83zm6 0v3.83h8.45c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91q.05-.61.04-1.7zm-6-1.5h4.5v-3.84h-4.5zm6 0h12.5v-3.84H8.75zM6.8 4.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91q-.05.61-.04 1.7h4.5V4.74zm1.95 3.83h12.5q.01-1.08-.04-1.69a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04H8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableRegular.displayName = 'DataTableRegular';

export { DataTableRegular };
export type { DataTableRegularProps };

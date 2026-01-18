import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WarehouseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WarehouseRegularDuotone = memo(
  forwardRef<SVGSVGElement, WarehouseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.77 2.78a2.8 2.8 0 0 1 2.46 0l8 4a2.8 2.8 0 0 1 1.52 2.46V18A2.75 2.75 0 0 1 20 20.75h-2.25v-1.5H20c.69 0 1.25-.56 1.25-1.25V9.24c0-.48-.27-.91-.7-1.12l-8-4a1.3 1.3 0 0 0-1.1 0l-8 4c-.43.21-.7.64-.7 1.12V18c0 .69.56 1.25 1.25 1.25h2.25v1.5H4A2.75 2.75 0 0 1 1.25 18V9.24c0-1.05.59-2 1.52-2.46z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.75 10.25a2 2 0 0 1 2 2v8.5H6.25v-8.5c0-1.1.9-2 2-2zm-8 7.5v1.5h8.5v-1.5zm0-1.5h8.5v-1.5h-8.5zm.5-4.5a.5.5 0 0 0-.5.5v1h8.5v-1a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseRegularDuotone.displayName = 'WarehouseRegularDuotone';

export { WarehouseRegularDuotone };
export type { WarehouseRegularDuotoneProps };

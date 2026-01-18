import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WarehouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WarehouseFillDuotone = memo(
  forwardRef<SVGSVGElement, WarehouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.66 2.55a3 3 0 0 1 2.68 0l8 4A3 3 0 0 1 23 9.24V18a3 3 0 0 1-3 3h-2v-8.75c0-1.24-1-2.25-2.25-2.25h-7.5C7.01 10 6 11 6 12.25V21H4a3 3 0 0 1-3-3V9.24a3 3 0 0 1 1.66-2.69z" opacity={0.4} />
        <path d="M16 18v1H8v-1zM16 15v1H8v-1zM15.75 12q.23.02.25.25V13H8v-.75q.02-.23.25-.25z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.75 10c1.24 0 2.25 1 2.25 2.25V21H6v-8.75C6 11.01 7 10 8.25 10zM8 18v1h8v-1zm0-2h8v-1H8zm.25-4a.25.25 0 0 0-.25.25V13h8v-.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseFillDuotone.displayName = 'WarehouseFillDuotone';

// Triple export pattern (lucide-react style)
export { WarehouseFillDuotone, WarehouseFillDuotone as WarehouseFillDuotoneIcon, WarehouseFillDuotone as SiWarehouseFillDuotone };
export type { WarehouseFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WarehouseFillProps = Omit<IconBaseProps, 'children'>;

const WarehouseFill = memo(
  forwardRef<SVGSVGElement, WarehouseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="warehouse-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.77 2.78a2.8 2.8 0 0 1 2.46 0l8 4a2.8 2.8 0 0 1 1.52 2.46V18A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V9.24c0-1.05.59-2 1.52-2.46zM7.75 19.25h8.5v-1.5h-8.5zm0-3h8.5v-1.5h-8.5zm.5-4.5a.5.5 0 0 0-.5.5v1h8.5v-1a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseFill.displayName = 'WarehouseFill';

// Triple export pattern (lucide-react style)
export { WarehouseFill, WarehouseFill as WarehouseFillIcon, WarehouseFill as SiWarehouseFill };
export default WarehouseFill;
export type { WarehouseFillProps };

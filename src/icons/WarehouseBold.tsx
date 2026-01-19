import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WarehouseBoldProps = Omit<IconBaseProps, 'children'>;

const WarehouseBold = memo(
  forwardRef<SVGSVGElement, WarehouseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="warehouse-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.66 2.55a3 3 0 0 1 2.68 0l8 4A3 3 0 0 1 23 9.24V18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.24a3 3 0 0 1 1.66-2.69zm1.79 1.8a1 1 0 0 0-.9 0l-8 4a1 1 0 0 0-.55.89V18a1 1 0 0 0 1 1h2v-6.75C6 11.01 7 10 8.25 10h7.5c1.24 0 2.25 1 2.25 2.25V19h2a1 1 0 0 0 1-1V9.24a1 1 0 0 0-.55-.9zM8 18v1h8v-1zm0-2h8v-1H8zm.25-4a.25.25 0 0 0-.25.25V13h8v-.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseBold.displayName = 'WarehouseBold';

// Triple export pattern (lucide-react style)
export { WarehouseBold, WarehouseBold as WarehouseBoldIcon, WarehouseBold as SiWarehouseBold };
export type { WarehouseBoldProps };

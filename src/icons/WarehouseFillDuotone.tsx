import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WarehouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WarehouseFillDuotone = memo(
  forwardRef<SVGSVGElement, WarehouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="warehouse-fill-duotone" {...props}>
      <path d="M11.4 3.35a3 3 0 0 1 1.2 0c.49.1.93.36 1.44.64l5.8 3.22c.54.3 1.01.55 1.37.93a3 3 0 0 1 .79 2.3v5.36q0 .81-.03 1.4c-.03.39-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.18.3q-.57.04-1.4.03h-.29v-6.75c0-1.24-1-2.25-2.25-2.25h-6.5c-1.24 0-2.25 1-2.25 2.25V20h-.3q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-4.92c0-.61-.01-1.15.15-1.64a3 3 0 0 1 .64-1.1c.36-.38.83-.63 1.37-.93L9.96 4c.51-.28.95-.54 1.44-.64" opacity={0.4} />
        <path d="M15.5 17.5V20h-7v-2.5zM15.25 13q.23.02.25.25v2.25h-7v-2.25q.02-.23.25-.25z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.25 11c1.24 0 2.25 1 2.25 2.25V20h-2v-2.5h-7V20h-2v-6.75c0-1.24 1-2.25 2.25-2.25zm-6.5 2a.25.25 0 0 0-.25.25v2.25h7v-2.25a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseFillDuotone.displayName = 'WarehouseFillDuotone';

// Triple export pattern (lucide-react style)
export { WarehouseFillDuotone, WarehouseFillDuotone as WarehouseFillDuotoneIcon, WarehouseFillDuotone as SiWarehouseFillDuotone };
export default WarehouseFillDuotone;
export type { WarehouseFillDuotoneProps };

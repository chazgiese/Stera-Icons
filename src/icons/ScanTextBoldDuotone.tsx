import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-text-bold-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M12.5 13a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 9a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanTextBoldDuotone.displayName = 'ScanTextBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanTextBoldDuotone, ScanTextBoldDuotone as ScanTextBoldDuotoneIcon, ScanTextBoldDuotone as SiScanTextBoldDuotone };
export default ScanTextBoldDuotone;
export type { ScanTextBoldDuotoneProps };

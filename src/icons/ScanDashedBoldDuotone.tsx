import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-dashed-bold-duotone" {...props}>
      <path d="M4 14.5a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2h-2A3.5 3.5 0 0 1 3 17.5v-2a1 1 0 0 1 1-1M20 14.5a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8.5 3a1 1 0 0 1 0 2h-2C5.67 5 5 5.67 5 6.5v2a1 1 0 0 1-2 0v-2A3.5 3.5 0 0 1 6.5 3zM17.5 3A3.5 3.5 0 0 1 21 6.5v2a1 1 0 1 1-2 0v-2c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M21.5 11a1 1 0 1 1 0 2h-19a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanDashedBoldDuotone.displayName = 'ScanDashedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanDashedBoldDuotone, ScanDashedBoldDuotone as ScanDashedBoldDuotoneIcon, ScanDashedBoldDuotone as SiScanDashedBoldDuotone };
export default ScanDashedBoldDuotone;
export type { ScanDashedBoldDuotoneProps };

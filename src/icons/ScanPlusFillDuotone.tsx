import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-plus-fill-duotone" {...props}>
      <path d="M3 15.5c.83 0 1.5.67 1.5 1.5v2c0 .28.22.5.5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19v-2c0-.83.67-1.5 1.5-1.5M21 15.5c.83 0 1.5.67 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2c0-.83.67-1.5 1.5-1.5M7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 5 1.5zM19 1.5A3.5 3.5 0 0 1 22.5 5v2a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M12 6.5c.83 0 1.5.67 1.5 1.5v2.5H16a1.5 1.5 0 0 1 0 3h-2.5V16a1.5 1.5 0 0 1-3 0v-2.5H8a1.5 1.5 0 0 1 0-3h2.5V8c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

ScanPlusFillDuotone.displayName = 'ScanPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanPlusFillDuotone, ScanPlusFillDuotone as ScanPlusFillDuotoneIcon, ScanPlusFillDuotone as SiScanPlusFillDuotone };
export type { ScanPlusFillDuotoneProps };

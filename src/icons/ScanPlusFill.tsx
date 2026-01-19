import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanPlusFillProps = Omit<IconBaseProps, 'children'>;

const ScanPlusFill = memo(
  forwardRef<SVGSVGElement, ScanPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-plus-fill" {...props}>
      <path fill="currentColor" d="M3 15.5c.83 0 1.5.67 1.5 1.5v2c0 .28.22.5.5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19v-2c0-.83.67-1.5 1.5-1.5M21 15.5c.83 0 1.5.67 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2c0-.83.67-1.5 1.5-1.5M12 6.5c.83 0 1.5.67 1.5 1.5v2.5H16a1.5 1.5 0 0 1 0 3h-2.5V16a1.5 1.5 0 0 1-3 0v-2.5H8a1.5 1.5 0 0 1 0-3h2.5V8c0-.83.67-1.5 1.5-1.5M7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 5 1.5zM19 1.5A3.5 3.5 0 0 1 22.5 5v2a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanPlusFill.displayName = 'ScanPlusFill';

// Triple export pattern (lucide-react style)
export { ScanPlusFill, ScanPlusFill as ScanPlusFillIcon, ScanPlusFill as SiScanPlusFill };
export default ScanPlusFill;
export type { ScanPlusFillProps };

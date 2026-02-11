import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusFillProps = Omit<IconBaseProps, 'children'>;

const ScanPlusFill = memo(
  forwardRef<SVGSVGElement, ScanPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-plus-fill" {...props}>
      <path d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v2a1 1 0 0 0 1 1h2a1.5 1.5 0 0 1 0 3H6a4 4 0 0 1-4-4v-2c0-.83.67-1.5 1.5-1.5M20.5 14.5c.83 0 1.5.67 1.5 1.5v2a4 4 0 0 1-4 4h-2a1.5 1.5 0 0 1 0-3h2a1 1 0 0 0 1-1v-2c0-.83.67-1.5 1.5-1.5M12 6.5c.83 0 1.5.67 1.5 1.5v2.5H16a1.5 1.5 0 0 1 0 3h-2.5V16a1.5 1.5 0 0 1-3 0v-2.5H8a1.5 1.5 0 0 1 0-3h2.5V8c0-.83.67-1.5 1.5-1.5M8 2a1.5 1.5 0 1 1 0 3H6a1 1 0 0 0-1 1v2a1.5 1.5 0 1 1-3 0V6a4 4 0 0 1 4-4zM18 2a4 4 0 0 1 4 4v2a1.5 1.5 0 0 1-3 0V6a1 1 0 0 0-1-1h-2a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanPlusFill.displayName = 'ScanPlusFill';

// Triple export pattern (lucide-react style)
export { ScanPlusFill, ScanPlusFill as ScanPlusFillIcon, ScanPlusFill as SiScanPlusFill };
export default ScanPlusFill;
export type { ScanPlusFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-text-fill-duotone" {...props}>
      <path d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v2a1 1 0 0 0 1 1h2a1.5 1.5 0 0 1 0 3H6a4 4 0 0 1-4-4v-2c0-.83.67-1.5 1.5-1.5M20.5 14.5c.83 0 1.5.67 1.5 1.5v2a4 4 0 0 1-4 4h-2a1.5 1.5 0 0 1 0-3h2a1 1 0 0 0 1-1v-2c0-.83.67-1.5 1.5-1.5M8 2a1.5 1.5 0 1 1 0 3H6a1 1 0 0 0-1 1v2a1.5 1.5 0 1 1-3 0V6a4 4 0 0 1 4-4zM18 2a4 4 0 0 1 4 4v2a1.5 1.5 0 0 1-3 0V6a1 1 0 0 0-1-1h-2a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M12.5 12.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM16 8.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanTextFillDuotone.displayName = 'ScanTextFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanTextFillDuotone, ScanTextFillDuotone as ScanTextFillDuotoneIcon, ScanTextFillDuotone as SiScanTextFillDuotone };
export default ScanTextFillDuotone;
export type { ScanTextFillDuotoneProps };

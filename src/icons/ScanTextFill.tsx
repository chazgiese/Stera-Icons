import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextFillProps = Omit<IconBaseProps, 'children'>;

const ScanTextFill = memo(
  forwardRef<SVGSVGElement, ScanTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-text-fill" {...props}>
      <path fill="currentColor" d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v2a1 1 0 0 0 1 1h2a1.5 1.5 0 0 1 0 3H6a4 4 0 0 1-4-4v-2c0-.83.67-1.5 1.5-1.5M20.5 14.5c.83 0 1.5.67 1.5 1.5v2a4 4 0 0 1-4 4h-2a1.5 1.5 0 0 1 0-3h2a1 1 0 0 0 1-1v-2c0-.83.67-1.5 1.5-1.5M12.5 12.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM16 8.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 0 1 0-3zM8 2a1.5 1.5 0 1 1 0 3H6a1 1 0 0 0-1 1v2a1.5 1.5 0 1 1-3 0V6a4 4 0 0 1 4-4zM18 2a4 4 0 0 1 4 4v2a1.5 1.5 0 0 1-3 0V6a1 1 0 0 0-1-1h-2a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanTextFill.displayName = 'ScanTextFill';

// Triple export pattern (lucide-react style)
export { ScanTextFill, ScanTextFill as ScanTextFillIcon, ScanTextFill as SiScanTextFill };
export default ScanTextFill;
export type { ScanTextFillProps };

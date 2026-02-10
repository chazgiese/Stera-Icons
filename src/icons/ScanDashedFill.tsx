import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedFillProps = Omit<IconBaseProps, 'children'>;

const ScanDashedFill = memo(
  forwardRef<SVGSVGElement, ScanDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-dashed-fill" {...props}>
      <path fill="currentColor" d="M4 14.5c.83 0 1.5.67 1.5 1.5v1.5a1 1 0 0 0 1 1H8a1.5 1.5 0 0 1 0 3H6.5a4 4 0 0 1-4-4V16c0-.83.67-1.5 1.5-1.5M20 14.5c.83 0 1.5.67 1.5 1.5v1.5a4 4 0 0 1-4 4H16a1.5 1.5 0 0 1 0-3h1.5a1 1 0 0 0 1-1V16c0-.83.67-1.5 1.5-1.5M21.5 10.5a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 0 1 0-3zM8 2.5a1.5 1.5 0 1 1 0 3H6.5a1 1 0 0 0-1 1V8a1.5 1.5 0 1 1-3 0V6.5a4 4 0 0 1 4-4zM17.5 2.5a4 4 0 0 1 4 4V8a1.5 1.5 0 0 1-3 0V6.5a1 1 0 0 0-1-1H16a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanDashedFill.displayName = 'ScanDashedFill';

// Triple export pattern (lucide-react style)
export { ScanDashedFill, ScanDashedFill as ScanDashedFillIcon, ScanDashedFill as SiScanDashedFill };
export default ScanDashedFill;
export type { ScanDashedFillProps };

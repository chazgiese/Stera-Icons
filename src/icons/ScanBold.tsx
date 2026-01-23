import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBoldProps = Omit<IconBaseProps, 'children'>;

const ScanBold = memo(
  forwardRef<SVGSVGElement, ScanBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-bold" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanBold.displayName = 'ScanBold';

// Triple export pattern (lucide-react style)
export { ScanBold, ScanBold as ScanBoldIcon, ScanBold as SiScanBold };
export default ScanBold;
export type { ScanBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanDashedBoldProps = Omit<IconBaseProps, 'children'>;

const ScanDashedBold = memo(
  forwardRef<SVGSVGElement, ScanDashedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-dashed-bold" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanDashedBold.displayName = 'ScanDashedBold';

// Triple export pattern (lucide-react style)
export { ScanDashedBold, ScanDashedBold as ScanDashedBoldIcon, ScanDashedBold as SiScanDashedBold };
export type { ScanDashedBoldProps };

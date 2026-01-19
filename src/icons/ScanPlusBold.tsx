import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanPlusBoldProps = Omit<IconBaseProps, 'children'>;

const ScanPlusBold = memo(
  forwardRef<SVGSVGElement, ScanPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-plus-bold" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M12 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanPlusBold.displayName = 'ScanPlusBold';

// Triple export pattern (lucide-react style)
export { ScanPlusBold, ScanPlusBold as ScanPlusBoldIcon, ScanPlusBold as SiScanPlusBold };
export default ScanPlusBold;
export type { ScanPlusBoldProps };

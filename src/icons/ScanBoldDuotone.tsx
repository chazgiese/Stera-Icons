import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-bold-duotone" {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

ScanBoldDuotone.displayName = 'ScanBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanBoldDuotone, ScanBoldDuotone as ScanBoldDuotoneIcon, ScanBoldDuotone as SiScanBoldDuotone };
export type { ScanBoldDuotoneProps };

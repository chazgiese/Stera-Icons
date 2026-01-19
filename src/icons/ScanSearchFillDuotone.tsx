import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-search-fill-duotone" {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 5.5a5.5 5.5 0 0 1 4.92 7.95l1.82 1.81a1.75 1.75 0 1 1-2.48 2.48l-1.81-1.82q-1.12.57-2.45.58a5.5 5.5 0 1 1 0-11m0 3a2.5 2.5 0 1 0 1.72 4.31l.04-.05.05-.04A2.5 2.5 0 0 0 11 8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchFillDuotone.displayName = 'ScanSearchFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanSearchFillDuotone, ScanSearchFillDuotone as ScanSearchFillDuotoneIcon, ScanSearchFillDuotone as SiScanSearchFillDuotone };
export type { ScanSearchFillDuotoneProps };

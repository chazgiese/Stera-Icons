import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanFaceBoldProps = Omit<IconBaseProps, 'children'>;

const ScanFaceBold = memo(
  forwardRef<SVGSVGElement, ScanFaceBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M13.8 13.26a.75.75 0 0 1 1.2.9 3.75 3.75 0 0 1-6 0 .75.75 0 0 1 1.2-.9 2.25 2.25 0 0 0 3.6 0M9.9 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1M14.1 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanFaceBold.displayName = 'ScanFaceBold';

// Triple export pattern (lucide-react style)
export { ScanFaceBold, ScanFaceBold as ScanFaceBoldIcon, ScanFaceBold as SiScanFaceBold };
export type { ScanFaceBoldProps };

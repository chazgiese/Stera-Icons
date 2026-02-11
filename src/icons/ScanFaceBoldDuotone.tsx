import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-bold-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M13.8 13.26a.75.75 0 0 1 1.2.9 3.75 3.75 0 0 1-6 0 .75.75 0 0 1 1.2-.9 2.25 2.25 0 0 0 3.6 0M9.9 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1M14.1 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1" />
        <path fillRule="evenodd" d="M12 5.13a6.87 6.87 0 1 1 0 13.74 6.87 6.87 0 0 1 0-13.74m0 1.75a5.12 5.12 0 1 0 0 10.24 5.12 5.12 0 0 0 0-10.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceBoldDuotone.displayName = 'ScanFaceBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanFaceBoldDuotone, ScanFaceBoldDuotone as ScanFaceBoldDuotoneIcon, ScanFaceBoldDuotone as SiScanFaceBoldDuotone };
export default ScanFaceBoldDuotone;
export type { ScanFaceBoldDuotoneProps };

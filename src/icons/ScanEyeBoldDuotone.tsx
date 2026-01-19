import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanEyeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-eye-bold-duotone" {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.5a8.6 8.6 0 0 1 7.91 5.1 1 1 0 0 1 0 .8A8.6 8.6 0 0 1 12 17.5a8.6 8.6 0 0 1-7.91-5.1 1 1 0 0 1 0-.8C5.42 8.58 8.47 6.5 12 6.5m0 2A6.7 6.7 0 0 0 6.11 12 6.7 6.7 0 0 0 12 15.5a6.7 6.7 0 0 0 5.89-3.5A6.7 6.7 0 0 0 12 8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeBoldDuotone.displayName = 'ScanEyeBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanEyeBoldDuotone, ScanEyeBoldDuotone as ScanEyeBoldDuotoneIcon, ScanEyeBoldDuotone as SiScanEyeBoldDuotone };
export default ScanEyeBoldDuotone;
export type { ScanEyeBoldDuotoneProps };

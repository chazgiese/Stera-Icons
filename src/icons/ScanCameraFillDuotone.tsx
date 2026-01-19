import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanCameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-fill-duotone" {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.25 6.26q.22 0 .4.07.33.1.6.32c.2.18.35.42.54.72l.2.3.12.2q.18.21.46.25h.22c.36 0 .6 0 .82.04.96.18 1.69.96 1.85 1.92.04.22.04.47.04.85v2.82q0 .77-.03 1.27a3 3 0 0 1-.22.93q-.33.67-1 1.04-.4.2-.9.23-.49.04-1.23.03H8.88q-.75 0-1.22-.03a2 2 0 0 1-.91-.23q-.67-.36-1-1.04a3 3 0 0 1-.22-.93q-.04-.5-.03-1.27v-2.82c0-.38 0-.63.04-.85.16-.96.9-1.74 1.85-1.92q.3-.04.82-.03l.22-.01q.27-.03.46-.25l.13-.2.19-.3c.19-.3.34-.54.54-.72q.27-.21.6-.32c.25-.09.53-.08.88-.08h2.02M12 10.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraFillDuotone.displayName = 'ScanCameraFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanCameraFillDuotone, ScanCameraFillDuotone as ScanCameraFillDuotoneIcon, ScanCameraFillDuotone as SiScanCameraFillDuotone };
export default ScanCameraFillDuotone;
export type { ScanCameraFillDuotoneProps };

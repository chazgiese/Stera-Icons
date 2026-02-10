import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraFillProps = Omit<IconBaseProps, 'children'>;

const ScanCameraFill = memo(
  forwardRef<SVGSVGElement, ScanCameraFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-fill" {...props}>
      <path fill="currentColor" d="M3.5 15a1 1 0 0 1 1 1v1.75c0 .97.78 1.75 1.75 1.75H8a1 1 0 1 1 0 2H6.25a3.75 3.75 0 0 1-3.75-3.75V16a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-3.75 3.75H16a1 1 0 1 1 0-2h1.75c.97 0 1.75-.78 1.75-1.75V16a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12.7 6.75q.47-.02.83.07.3.1.55.3c.2.17.34.4.51.66l.18.27.11.17q.15.19.4.21h.2q.46-.01.76.04c.88.17 1.57.88 1.73 1.77q.04.28.03.77v2.54q0 .69-.02 1.15t-.21.85q-.31.63-.94.96-.39.19-.84.22t-1.13.02H9.14q-.67 0-1.13-.02-.45-.04-.84-.22-.61-.33-.94-.96a2 2 0 0 1-.2-.85q-.04-.46-.03-1.15v-2.54q0-.49.03-.77c.16-.9.85-1.6 1.73-1.77q.29-.04.77-.03h.2a.6.6 0 0 0 .39-.22l.11-.17.18-.27q.23-.41.5-.66.26-.2.56-.3c.25-.08.5-.07.82-.07zm-.7 3.63a1.83 1.83 0 1 0 0 3.66 1.83 1.83 0 0 0 0-3.66" clipRule="evenodd" />
        <path fill="currentColor" d="M8 2.5a1 1 0 0 1 0 2H6.25c-.97 0-1.75.78-1.75 1.75V8a1 1 0 0 1-2 0V6.25A3.75 3.75 0 0 1 6.25 2.5zM17.75 2.5a3.75 3.75 0 0 1 3.75 3.75V8a1 1 0 1 1-2 0V6.25c0-.97-.78-1.75-1.75-1.75H16a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanCameraFill.displayName = 'ScanCameraFill';

// Triple export pattern (lucide-react style)
export { ScanCameraFill, ScanCameraFill as ScanCameraFillIcon, ScanCameraFill as SiScanCameraFill };
export default ScanCameraFill;
export type { ScanCameraFillProps };

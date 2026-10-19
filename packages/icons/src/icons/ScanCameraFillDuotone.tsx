import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.5c0 .97.78 1.75 1.75 1.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.5c0 1.8-1.46 3.25-3.25 3.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.97 0 1.75-.78 1.75-1.75V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-.97 0-1.75.78-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-1.8 1.46-3.25 3.25-3.25zM18.5 2.25c1.8 0 3.25 1.46 3.25 3.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5c0-.97-.78-1.75-1.75-1.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.7 6.75q.47-.02.83.07.3.1.55.3c.2.17.34.4.51.66l.18.27.11.17q.15.19.4.21h.2q.46-.01.76.04c.88.17 1.57.88 1.73 1.77q.04.28.03.77v2.54q0 .69-.02 1.15t-.21.85q-.31.63-.94.96-.39.2-.84.22t-1.13.02H9.14q-.67 0-1.13-.02t-.84-.22q-.61-.33-.94-.96-.18-.39-.2-.85-.04-.45-.03-1.15v-2.54q0-.49.03-.77c.16-.9.85-1.6 1.73-1.77q.29-.04.77-.03h.2q.23-.04.39-.22l.11-.17.18-.27q.23-.41.5-.66.26-.2.56-.3.36-.09.82-.07zm-.7 3.63c-1.01 0-1.83.82-1.83 1.83s.82 1.83 1.83 1.83 1.83-.82 1.83-1.83-.82-1.83-1.83-1.83" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraFillDuotone.displayName = 'ScanCameraFillDuotone';

// Triple export pattern
export { ScanCameraFillDuotone, ScanCameraFillDuotone as ScanCameraFillDuotoneIcon, ScanCameraFillDuotone as SiScanCameraFillDuotone };
export default ScanCameraFillDuotone;
export type { ScanCameraFillDuotoneProps };

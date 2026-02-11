import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-camera-bold-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v1.75c0 .97.78 1.75 1.75 1.75H8a1 1 0 1 1 0 2H6.25a3.75 3.75 0 0 1-3.75-3.75V16a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-3.75 3.75H16a1 1 0 1 1 0-2h1.75c.97 0 1.75-.78 1.75-1.75V16a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6.25c-.97 0-1.75.78-1.75 1.75V8a1 1 0 0 1-2 0V6.25A3.75 3.75 0 0 1 6.25 2.5zM17.75 2.5a3.75 3.75 0 0 1 3.75 3.75V8a1 1 0 1 1-2 0V6.25c0-.97-.78-1.75-1.75-1.75H16a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M12 10.37a1.83 1.83 0 1 1 0 3.67 1.83 1.83 0 0 1 0-3.67" />
        <path fillRule="evenodd" d="M12.7 6.25q.39-.01.85.06l.13.03.2.07q.27.13.52.33c.27.22.45.53.61.77l.18.27.07.1v.02l.07.04h.14q.46-.01.86.04c1.1.2 1.93 1.08 2.13 2.17q.05.4.04.86v2.54q0 .7-.03 1.19-.01.52-.26 1.03c-.25.5-.65.92-1.15 1.18q-.52.26-1.03.27-.5.04-1.17.03H9.14q-.67 0-1.17-.03-.52-.01-1.03-.27-.76-.4-1.16-1.18-.24-.52-.25-1.03-.04-.5-.03-1.19v-2.54q-.01-.47.04-.86a2.7 2.7 0 0 1 2.13-2.17q.4-.06.86-.04h.14l.06-.04V7.9l.08-.11L9 7.5c.16-.24.34-.55.6-.77q.34-.27.73-.4c.34-.1.7-.09.97-.09zm-1.76 2h-.03l-.02.02-.03.03-.2.3-.17.27q-.09.14-.22.3a2 2 0 0 1-1.37.75q-.2.02-.37.02h-.5a.7.7 0 0 0-.52.56L7.5 11v2.54c0 .49 0 .8.02 1.03s.05.28.06.3q.1.2.28.3a1 1 0 0 0 .28.05c.22.02.52.02 1 .02h5.72c.48 0 .78 0 1-.02a1 1 0 0 0 .28-.05.7.7 0 0 0 .28-.3c.01-.02.04-.08.06-.3.02-.23.02-.54.02-1.03v-2.54l-.01-.51a.7.7 0 0 0-.53-.55l-.49-.01q-.16 0-.37-.02a2 2 0 0 1-1.37-.75q-.13-.16-.22-.3l-.18-.27-.2-.3q-.01-.03-.02-.03l-.02-.01h-.03l-.35-.01h-1.77" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraBoldDuotone.displayName = 'ScanCameraBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanCameraBoldDuotone, ScanCameraBoldDuotone as ScanCameraBoldDuotoneIcon, ScanCameraBoldDuotone as SiScanCameraBoldDuotone };
export default ScanCameraBoldDuotone;
export type { ScanCameraBoldDuotoneProps };

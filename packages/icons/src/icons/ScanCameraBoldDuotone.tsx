import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCameraBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCameraBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCameraBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.5c0 .83.67 1.5 1.5 1.5H8c.55 0 1 .45 1 1s-.45 1-1 1H5.5C3.57 22 2 20.43 2 18.5V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.5c0 1.93-1.57 3.5-3.5 3.5H16c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.83 0 1.5-.67 1.5-1.5V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.5C4.67 4 4 4.67 4 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5C2 3.57 3.57 2 5.5 2zM18.5 2C20.43 2 22 3.57 22 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5c0-.83-.67-1.5-1.5-1.5H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M12 10.37c1.01 0 1.83.83 1.83 1.84s-.82 1.83-1.83 1.83-1.83-.82-1.83-1.83.82-1.84 1.83-1.84" />
        <path fillRule="evenodd" d="M12.7 6.25q.39-.01.85.06l.13.03.2.07q.27.13.52.33c.27.22.45.53.61.77l.18.27.07.1.01.02.06.04h.14q.46-.01.86.04c1.1.2 1.93 1.08 2.13 2.17q.05.4.04.86v2.54q0 .7-.03 1.19c-.02.34-.08.7-.26 1.03-.25.5-.65.92-1.15 1.18q-.52.26-1.03.27-.5.04-1.17.03H9.14q-.68 0-1.17-.03-.52-.01-1.03-.27-.76-.4-1.15-1.18-.25-.52-.26-1.03-.04-.5-.03-1.19v-2.54q-.01-.47.04-.86c.2-1.1 1.04-1.96 2.13-2.17q.4-.06.86-.04h.14q.03 0 .06-.04V7.9l.08-.11L9 7.5c.16-.24.34-.55.6-.77q.34-.27.73-.4c.34-.1.7-.09.97-.09zm-1.76 2h-.03l-.02.02-.03.03-.2.3-.17.27q-.09.14-.22.3c-.34.42-.83.7-1.37.75q-.2.02-.37.02h-.5c-.25.06-.47.26-.52.56L7.5 11v2.54c0 .49 0 .8.02 1.03s.05.28.06.3q.1.2.28.3c.01 0 .07.03.28.05s.52.02 1 .02h5.72c.48 0 .78 0 1-.02s.27-.04.28-.05q.19-.1.28-.3c.01-.02.04-.08.06-.3.02-.23.02-.54.02-1.03v-2.54l-.01-.51c-.05-.3-.27-.5-.53-.55l-.49-.01q-.16 0-.37-.02c-.54-.06-1.03-.33-1.37-.75q-.13-.16-.22-.3l-.17-.27-.2-.3-.03-.03-.02-.01h-.03l-.35-.01h-1.77" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCameraBoldDuotone.displayName = 'ScanCameraBoldDuotone';

// Triple export pattern
export { ScanCameraBoldDuotone, ScanCameraBoldDuotone as ScanCameraBoldDuotoneIcon, ScanCameraBoldDuotone as SiScanCameraBoldDuotone };
export default ScanCameraBoldDuotone;
export type { ScanCameraBoldDuotoneProps };

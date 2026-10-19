import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.5c0 .83.67 1.5 1.5 1.5H8c.55 0 1 .45 1 1s-.45 1-1 1H5.5C3.57 22 2 20.43 2 18.5V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.5c0 1.93-1.57 3.5-3.5 3.5H16c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.83 0 1.5-.67 1.5-1.5V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.5C4.67 4 4 4.67 4 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5C2 3.57 3.57 2 5.5 2zM18.5 2C20.43 2 22 3.57 22 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5c0-.83-.67-1.5-1.5-1.5H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M15.26 8.57c.38-.4 1-.43 1.42-.06.4.38.43 1 .06 1.42l-4.88 5.32-.32.33c-.12.1-.3.25-.55.34q-.51.16-1-.03c-.26-.1-.43-.25-.54-.36l-.3-.34-1.92-2.3c-.35-.42-.3-1.05.13-1.4.42-.36 1.05-.3 1.4.12l1.77 2.12z" />
    </IconBase>
  ))
);

ScanCheckBoldDuotone.displayName = 'ScanCheckBoldDuotone';

// Triple export pattern
export { ScanCheckBoldDuotone, ScanCheckBoldDuotone as ScanCheckBoldDuotoneIcon, ScanCheckBoldDuotone as SiScanCheckBoldDuotone };
export default ScanCheckBoldDuotone;
export type { ScanCheckBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15c.55 0 1 .45 1 1v1.5c0 1.1.9 2 2 2H8c.55 0 1 .45 1 1s-.45 1-1 1H6.5c-2.2 0-4-1.8-4-4V16c0-.55.45-1 1-1M20.5 15c.55 0 1 .45 1 1v1.5c0 2.2-1.8 4-4 4H16c-.55 0-1-.45-1-1s.45-1 1-1h1.5c1.1 0 2-.9 2-2V16c0-.55.45-1 1-1M8 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6.5c-1.1 0-2 .9-2 2V8c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-2.2 1.8-4 4-4zM17.5 2.5c2.2 0 4 1.8 4 4V8c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-1.1-.9-2-2-2H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M22.5 11c.55 0 1 .45 1 1s-.45 1-1 1h-21c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanDashedBoldDuotone.displayName = 'ScanDashedBoldDuotone';

// Triple export pattern
export { ScanDashedBoldDuotone, ScanDashedBoldDuotone as ScanDashedBoldDuotoneIcon, ScanDashedBoldDuotone as SiScanDashedBoldDuotone };
export default ScanDashedBoldDuotone;
export type { ScanDashedBoldDuotoneProps };

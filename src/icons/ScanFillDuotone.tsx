import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-fill-duotone" {...props}>
      <path d="M3.5 14.5c.83 0 1.5.67 1.5 1.5v1.75c0 .69.56 1.25 1.25 1.25H8a1.5 1.5 0 0 1 0 3H6.25A4.25 4.25 0 0 1 2 17.75V16c0-.83.67-1.5 1.5-1.5M17.75 2C20.1 2 22 3.9 22 6.25V8a1.5 1.5 0 0 1-3 0V6.25C19 5.56 18.44 5 17.75 5H16a1.5 1.5 0 0 1 0-3z" opacity={0.4} />
        <path d="M20.5 14.5c.83 0 1.5.67 1.5 1.5v1.75C22 20.1 20.1 22 17.75 22H16a1.5 1.5 0 0 1 0-3h1.75c.69 0 1.25-.56 1.25-1.25V16c0-.83.67-1.5 1.5-1.5M8 2a1.5 1.5 0 1 1 0 3H6.25C5.56 5 5 5.56 5 6.25V8a1.5 1.5 0 1 1-3 0V6.25C2 3.9 3.9 2 6.25 2z" />
    </IconBase>
  ))
);

ScanFillDuotone.displayName = 'ScanFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanFillDuotone, ScanFillDuotone as ScanFillDuotoneIcon, ScanFillDuotone as SiScanFillDuotone };
export default ScanFillDuotone;
export type { ScanFillDuotoneProps };

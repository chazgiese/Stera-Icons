import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 15c.55 0 1 .45 1 1v1.5c0 2.2-1.8 4-4 4h-11c-2.2 0-4-1.8-4-4V16c0-.55.45-1 1-1s1 .45 1 1v1.5c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V16c0-.55.45-1 1-1M17.5 2.5c2.2 0 4 1.8 4 4V8c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-1.1-.9-2-2-2h-11c-1.1 0-2 .9-2 2V8c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-2.2 1.8-4 4-4z" opacity={0.4} />
        <path d="M22.5 11c.55 0 1 .45 1 1s-.45 1-1 1h-21c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ScanLineBoldDuotone.displayName = 'ScanLineBoldDuotone';

// Triple export pattern
export { ScanLineBoldDuotone, ScanLineBoldDuotone as ScanLineBoldDuotoneIcon, ScanLineBoldDuotone as SiScanLineBoldDuotone };
export default ScanLineBoldDuotone;
export type { ScanLineBoldDuotoneProps };

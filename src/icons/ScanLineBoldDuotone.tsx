import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-bold-duotone" {...props}>
      <path d="M20 14.5a1 1 0 0 1 1 1V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1.5a1 1 0 1 1 2 0V17c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1.5a1 1 0 0 1 1-1M17 3a4 4 0 0 1 4 4v1.5a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1.5a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4z" opacity={0.4} />
        <path d="M21.5 11a1 1 0 1 1 0 2h-19a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanLineBoldDuotone.displayName = 'ScanLineBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineBoldDuotone, ScanLineBoldDuotone as ScanLineBoldDuotoneIcon, ScanLineBoldDuotone as SiScanLineBoldDuotone };
export default ScanLineBoldDuotone;
export type { ScanLineBoldDuotoneProps };

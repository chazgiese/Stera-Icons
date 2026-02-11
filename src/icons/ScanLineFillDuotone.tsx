import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-fill-duotone" {...props}>
      <path d="M21 17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4h18zM17 3a4 4 0 0 1 4 4v4H3V7a4 4 0 0 1 4-4z" opacity={0.4} />
        <path d="M21.5 11a1 1 0 1 1 0 2h-19a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanLineFillDuotone.displayName = 'ScanLineFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineFillDuotone, ScanLineFillDuotone as ScanLineFillDuotoneIcon, ScanLineFillDuotone as SiScanLineFillDuotone };
export default ScanLineFillDuotone;
export type { ScanLineFillDuotoneProps };

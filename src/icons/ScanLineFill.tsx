import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillProps = Omit<IconBaseProps, 'children'>;

const ScanLineFill = memo(
  forwardRef<SVGSVGElement, ScanLineFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-fill" {...props}>
      <path d="M20 14.5a1 1 0 0 1 1 1V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1.5a1 1 0 0 1 1-1zM21.5 11a1 1 0 1 1 0 2h-19a1 1 0 1 1 0-2zM17 3a4 4 0 0 1 4 4v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

ScanLineFill.displayName = 'ScanLineFill';

// Triple export pattern (lucide-react style)
export { ScanLineFill, ScanLineFill as ScanLineFillIcon, ScanLineFill as SiScanLineFill };
export default ScanLineFill;
export type { ScanLineFillProps };

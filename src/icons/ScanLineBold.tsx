import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineBoldProps = Omit<IconBaseProps, 'children'>;

const ScanLineBold = memo(
  forwardRef<SVGSVGElement, ScanLineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-bold" {...props}>
      <path fill="currentColor" d="M20 14.5a1 1 0 0 1 1 1V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1.5a1 1 0 1 1 2 0V17c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1.5a1 1 0 0 1 1-1M21.5 11a1 1 0 1 1 0 2h-19a1 1 0 1 1 0-2zM17 3a4 4 0 0 1 4 4v1.5a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1.5a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4z" />
    </IconBase>
  ))
);

ScanLineBold.displayName = 'ScanLineBold';

// Triple export pattern (lucide-react style)
export { ScanLineBold, ScanLineBold as ScanLineBoldIcon, ScanLineBold as SiScanLineBold };
export default ScanLineBold;
export type { ScanLineBoldProps };

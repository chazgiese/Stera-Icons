import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-bold-duotone" {...props}>
      <path d="M20 15a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1a1 1 0 1 1 2 0v1c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 1 1-1M17 3a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1a1 1 0 0 1-2 0V7a4 4 0 0 1 4-4z" opacity={0.4} />
        <path fill="currentColor" d="M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanLineBoldDuotone.displayName = 'ScanLineBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineBoldDuotone, ScanLineBoldDuotone as ScanLineBoldDuotoneIcon, ScanLineBoldDuotone as SiScanLineBoldDuotone };
export type { ScanLineBoldDuotoneProps };

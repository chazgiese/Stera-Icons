import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line-fill-duotone" {...props}>
      <path d="M22 14.6q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V13h20zM14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71V11H2V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2z" opacity={0.4} />
        <path fill="currentColor" d="M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanLineFillDuotone.displayName = 'ScanLineFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineFillDuotone, ScanLineFillDuotone as ScanLineFillDuotoneIcon, ScanLineFillDuotone as SiScanLineFillDuotone };
export type { ScanLineFillDuotoneProps };

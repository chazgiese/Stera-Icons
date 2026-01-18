import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15.25c.41 0 .75.34.75.75v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-1a.75.75 0 0 1 1.5 0v1c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25v-1c0-.41.34-.75.75-.75M17 3.25A3.75 3.75 0 0 1 20.75 7v1a.75.75 0 0 1-1.5 0V7c0-1.24-1-2.25-2.25-2.25H7c-1.24 0-2.25 1-2.25 2.25v1a.75.75 0 0 1-1.5 0V7A3.75 3.75 0 0 1 7 3.25z" opacity={0.4} />
        <path fill="currentColor" d="M23 11.25a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanLineRegularDuotone.displayName = 'ScanLineRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanLineRegularDuotone, ScanLineRegularDuotone as ScanLineRegularDuotoneIcon, ScanLineRegularDuotone as SiScanLineRegularDuotone };
export type { ScanLineRegularDuotoneProps };

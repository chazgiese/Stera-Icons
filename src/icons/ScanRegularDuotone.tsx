import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-duotone" {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25z" />
    </IconBase>
  ))
);

ScanRegularDuotone.displayName = 'ScanRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanRegularDuotone, ScanRegularDuotone as ScanRegularDuotoneIcon, ScanRegularDuotone as SiScanRegularDuotone };
export default ScanRegularDuotone;
export type { ScanRegularDuotoneProps };

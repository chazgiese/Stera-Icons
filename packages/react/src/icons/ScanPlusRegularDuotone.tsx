import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M12 7.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ScanPlusRegularDuotone.displayName = 'ScanPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanPlusRegularDuotone, ScanPlusRegularDuotone as ScanPlusRegularDuotoneIcon, ScanPlusRegularDuotone as SiScanPlusRegularDuotone };
export type { ScanPlusRegularDuotoneProps };

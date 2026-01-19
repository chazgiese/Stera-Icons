import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanFaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-duotone" {...props}>
      <path d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M13.8 13.26a.75.75 0 0 1 1.2.9 3.75 3.75 0 0 1-6 0 .75.75 0 0 1 1.2-.9 2.25 2.25 0 0 0 3.6 0M9.9 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1M14.1 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceRegularDuotone.displayName = 'ScanFaceRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanFaceRegularDuotone, ScanFaceRegularDuotone as ScanFaceRegularDuotoneIcon, ScanFaceRegularDuotone as SiScanFaceRegularDuotone };
export type { ScanFaceRegularDuotoneProps };

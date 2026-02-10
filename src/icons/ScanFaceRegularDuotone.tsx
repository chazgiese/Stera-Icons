import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-duotone" {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 1 2.75 18v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0V6c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M13.8 13.26a.75.75 0 0 1 1.2.9 3.75 3.75 0 0 1-6 0 .75.75 0 0 1 1.2-.9 2.25 2.25 0 0 0 3.6 0M9.9 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1M14.1 9.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceRegularDuotone.displayName = 'ScanFaceRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanFaceRegularDuotone, ScanFaceRegularDuotone as ScanFaceRegularDuotoneIcon, ScanFaceRegularDuotone as SiScanFaceRegularDuotone };
export default ScanFaceRegularDuotone;
export type { ScanFaceRegularDuotoneProps };

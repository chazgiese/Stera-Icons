import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeFillProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeFill = memo(
  forwardRef<SVGSVGElement, ScanBarcodeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-fill" {...props}>
      <path fill="currentColor" d="M3 13.5c.83 0 1.5.67 1.5 1.5v1.75c0 .69.56 1.25 1.25 1.25H7.5a1.5 1.5 0 0 1 0 3H5.75a4.25 4.25 0 0 1-4.25-4.25V15c0-.83.67-1.5 1.5-1.5M21 13.5c.83 0 1.5.67 1.5 1.5v1.75c0 2.35-1.9 4.25-4.25 4.25H16.5a1.5 1.5 0 0 1 0-3h1.75c.69 0 1.25-.56 1.25-1.25V15c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M7.5 7.5C8.33 7.5 9 8.17 9 9v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5M12 7.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5M16.5 7.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M7.5 3a1.5 1.5 0 1 1 0 3H5.75c-.69 0-1.25.56-1.25 1.25V9a1.5 1.5 0 1 1-3 0V7.25C1.5 4.9 3.4 3 5.75 3zM18.25 3c2.35 0 4.25 1.9 4.25 4.25V9a1.5 1.5 0 0 1-3 0V7.25c0-.69-.56-1.25-1.25-1.25H16.5a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanBarcodeFill.displayName = 'ScanBarcodeFill';

// Triple export pattern (lucide-react style)
export { ScanBarcodeFill, ScanBarcodeFill as ScanBarcodeFillIcon, ScanBarcodeFill as SiScanBarcodeFill };
export default ScanBarcodeFill;
export type { ScanBarcodeFillProps };

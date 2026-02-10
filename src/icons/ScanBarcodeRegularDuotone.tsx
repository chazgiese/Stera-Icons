import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanBarcodeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-duotone" {...props}>
      <path d="M3 14.25c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H7.5a.75.75 0 0 1 0 1.5H5.75a3.5 3.5 0 0 1-3.5-3.5V15c0-.41.34-.75.75-.75M21 14.25c.41 0 .75.34.75.75v1.75a3.5 3.5 0 0 1-3.5 3.5H16.5a.75.75 0 0 1 0-1.5h1.75a2 2 0 0 0 2-2V15c0-.41.34-.75.75-.75M7.5 3.75a.75.75 0 0 1 0 1.5H5.75a2 2 0 0 0-2 2V9a.75.75 0 0 1-1.5 0V7.25a3.5 3.5 0 0 1 3.5-3.5zM18.25 3.75a3.5 3.5 0 0 1 3.5 3.5V9a.75.75 0 0 1-1.5 0V7.25a2 2 0 0 0-2-2H16.5a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M7 7.75c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.34-.75.75-.75M10.33 7.75c.42 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.34-.75.75-.75M13.67 7.75c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.33-.75.75-.75M17 7.75c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ScanBarcodeRegularDuotone.displayName = 'ScanBarcodeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanBarcodeRegularDuotone, ScanBarcodeRegularDuotone as ScanBarcodeRegularDuotoneIcon, ScanBarcodeRegularDuotone as SiScanBarcodeRegularDuotone };
export default ScanBarcodeRegularDuotone;
export type { ScanBarcodeRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanBarcodeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanBarcodeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-duotone" {...props}>
      <path d="M2 14.25c.41 0 .75.34.75.75v3c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 18v-3c0-.41.34-.75.75-.75M22 14.25c.41 0 .75.34.75.75v3A2.75 2.75 0 0 1 20 20.75h-3a.75.75 0 0 1 0-1.5h3c.69 0 1.25-.56 1.25-1.25v-3c0-.41.34-.75.75-.75M7 3.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 4 3.25zM20 3.25A2.75 2.75 0 0 1 22.75 6v3a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-3a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M6 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75M10 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75M14 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75M18 7.25c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ScanBarcodeRegularDuotone.displayName = 'ScanBarcodeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanBarcodeRegularDuotone, ScanBarcodeRegularDuotone as ScanBarcodeRegularDuotoneIcon, ScanBarcodeRegularDuotone as SiScanBarcodeRegularDuotone };
export default ScanBarcodeRegularDuotone;
export type { ScanBarcodeRegularDuotoneProps };

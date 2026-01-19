import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanBarcodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanBarcodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-bold-duotone" {...props}>
      <path d="M2 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1M22 14a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1M7 3a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3zM20 3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M10 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M14 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M18 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ScanBarcodeBoldDuotone.displayName = 'ScanBarcodeBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScanBarcodeBoldDuotone, ScanBarcodeBoldDuotone as ScanBarcodeBoldDuotoneIcon, ScanBarcodeBoldDuotone as SiScanBarcodeBoldDuotone };
export type { ScanBarcodeBoldDuotoneProps };

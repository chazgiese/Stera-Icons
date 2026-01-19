import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanBarcodeFillProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeFill = memo(
  forwardRef<SVGSVGElement, ScanBarcodeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-fill" {...props}>
      <path fill="currentColor" d="M2 13.5c.83 0 1.5.67 1.5 1.5v3c0 .28.22.5.5.5h3a1.5 1.5 0 0 1 0 3H4A3.5 3.5 0 0 1 .5 18v-3c0-.83.67-1.5 1.5-1.5M22 13.5c.83 0 1.5.67 1.5 1.5v3a3.5 3.5 0 0 1-3.5 3.5h-3a1.5 1.5 0 0 1 0-3h3a.5.5 0 0 0 .5-.5v-3c0-.83.67-1.5 1.5-1.5M7.5 7.5C8.33 7.5 9 8.17 9 9v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5M12 7.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5M16.5 7.5c.83 0 1.5.67 1.5 1.5v6a1.5 1.5 0 0 1-3 0V9c0-.83.67-1.5 1.5-1.5M7 2.5a1.5 1.5 0 1 1 0 3H4a.5.5 0 0 0-.5.5v3a1.5 1.5 0 1 1-3 0V6A3.5 3.5 0 0 1 4 2.5zM20 2.5A3.5 3.5 0 0 1 23.5 6v3a1.5 1.5 0 0 1-3 0V6a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanBarcodeFill.displayName = 'ScanBarcodeFill';

// Triple export pattern (lucide-react style)
export { ScanBarcodeFill, ScanBarcodeFill as ScanBarcodeFillIcon, ScanBarcodeFill as SiScanBarcodeFill };
export default ScanBarcodeFill;
export type { ScanBarcodeFillProps };

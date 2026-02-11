import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBarcodeBoldProps = Omit<IconBaseProps, 'children'>;

const ScanBarcodeBold = memo(
  forwardRef<SVGSVGElement, ScanBarcodeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-barcode-bold" {...props}>
      <path d="M3 14a1 1 0 0 1 1 1v1.75c0 .97.78 1.75 1.75 1.75H7.5a1 1 0 1 1 0 2H5.75A3.75 3.75 0 0 1 2 16.75V15a1 1 0 0 1 1-1M21 14a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-3.75 3.75H16.5a1 1 0 1 1 0-2h1.75c.97 0 1.75-.78 1.75-1.75V15a1 1 0 0 1 1-1M7 7.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M10.33 7.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M13.67 7.5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1M17 7.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M7.5 3.5a1 1 0 0 1 0 2H5.75C4.78 5.5 4 6.28 4 7.25V9a1 1 0 0 1-2 0V7.25A3.75 3.75 0 0 1 5.75 3.5zM18.25 3.5A3.75 3.75 0 0 1 22 7.25V9a1 1 0 1 1-2 0V7.25c0-.97-.78-1.75-1.75-1.75H16.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanBarcodeBold.displayName = 'ScanBarcodeBold';

// Triple export pattern (lucide-react style)
export { ScanBarcodeBold, ScanBarcodeBold as ScanBarcodeBoldIcon, ScanBarcodeBold as SiScanBarcodeBold };
export default ScanBarcodeBold;
export type { ScanBarcodeBoldProps };

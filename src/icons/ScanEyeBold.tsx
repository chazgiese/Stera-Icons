import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeBoldProps = Omit<IconBaseProps, 'children'>;

const ScanEyeBold = memo(
  forwardRef<SVGSVGElement, ScanEyeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-eye-bold" {...props}>
      <path fill="currentColor" d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.5a8.1 8.1 0 0 1 7.42 5.12 1 1 0 0 1 0 .76A8.1 8.1 0 0 1 12 17.5a8.1 8.1 0 0 1-7.42-5.12 1 1 0 0 1 0-.76A8.1 8.1 0 0 1 12 6.5m0 2A6.1 6.1 0 0 0 6.6 12a6.1 6.1 0 0 0 5.4 3.5c2.32 0 4.38-1.4 5.4-3.5A6.1 6.1 0 0 0 12 8.5" clipRule="evenodd" />
        <path fill="currentColor" d="M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanEyeBold.displayName = 'ScanEyeBold';

// Triple export pattern (lucide-react style)
export { ScanEyeBold, ScanEyeBold as ScanEyeBoldIcon, ScanEyeBold as SiScanEyeBold };
export default ScanEyeBold;
export type { ScanEyeBoldProps };

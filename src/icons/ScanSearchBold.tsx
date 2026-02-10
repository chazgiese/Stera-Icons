import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchBoldProps = Omit<IconBaseProps, 'children'>;

const ScanSearchBold = memo(
  forwardRef<SVGSVGElement, ScanSearchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-search-bold" {...props}>
      <path fill="currentColor" d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M11.04 6.25a4.8 4.8 0 0 1 4.15 7.17l1.94 1.95a1.25 1.25 0 0 1-1.76 1.76l-1.95-1.94q-1.06.62-2.38.64a4.79 4.79 0 0 1 0-9.58m0 2a2.79 2.79 0 1 0 0 5.58 2.79 2.79 0 0 0 0-5.58" clipRule="evenodd" />
        <path fill="currentColor" d="M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanSearchBold.displayName = 'ScanSearchBold';

// Triple export pattern (lucide-react style)
export { ScanSearchBold, ScanSearchBold as ScanSearchBoldIcon, ScanSearchBold as SiScanSearchBold };
export default ScanSearchBold;
export type { ScanSearchBoldProps };

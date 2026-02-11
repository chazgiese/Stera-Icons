import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-search-fill-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 5.75a5.3 5.3 0 0 1 4.77 7.58l1.68 1.68A1.75 1.75 0 0 1 15 17.5l-1.68-1.68q-1.05.5-2.3.52a5.29 5.29 0 0 1 0-10.58m0 3a2.29 2.29 0 1 0 0 4.58 2.29 2.29 0 0 0 0-4.58" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchFillDuotone.displayName = 'ScanSearchFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanSearchFillDuotone, ScanSearchFillDuotone as ScanSearchFillDuotoneIcon, ScanSearchFillDuotone as SiScanSearchFillDuotone };
export default ScanSearchFillDuotone;
export type { ScanSearchFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchRegularProps = Omit<IconBaseProps, 'children'>;

const ScanSearchRegular = memo(
  forwardRef<SVGSVGElement, ScanSearchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-search" {...props}>
      <path fill="currentColor" d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M11 6.25a4.75 4.75 0 0 1 3.99 7.33l2.22 2.21a1 1 0 1 1-1.42 1.42l-2.21-2.22A4.75 4.75 0 1 1 11 6.25m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanSearchRegular.displayName = 'ScanSearchRegular';

// Triple export pattern (lucide-react style)
export { ScanSearchRegular, ScanSearchRegular as ScanSearchRegularIcon, ScanSearchRegular as SiScanSearchRegular };
export default ScanSearchRegular;
export type { ScanSearchRegularProps };

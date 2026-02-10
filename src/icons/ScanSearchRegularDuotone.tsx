import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-search-duotone" {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 1 2.75 18v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0V6c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.04 6.5a4.54 4.54 0 0 1 3.84 6.96l2.08 2.08a1 1 0 0 1-1.42 1.42l-2.08-2.08a4.54 4.54 0 1 1-2.42-8.38m0 1.5a3.04 3.04 0 1 0 0 6.08 3.04 3.04 0 0 0 0-6.08" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchRegularDuotone.displayName = 'ScanSearchRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanSearchRegularDuotone, ScanSearchRegularDuotone as ScanSearchRegularDuotoneIcon, ScanSearchRegularDuotone as SiScanSearchRegularDuotone };
export default ScanSearchRegularDuotone;
export type { ScanSearchRegularDuotoneProps };

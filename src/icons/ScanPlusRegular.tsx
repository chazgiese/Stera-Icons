import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusRegularProps = Omit<IconBaseProps, 'children'>;

const ScanPlusRegular = memo(
  forwardRef<SVGSVGElement, ScanPlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-plus" {...props}>
      <path fill="currentColor" d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 1 2.75 18v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M12 7.25c.41 0 .75.34.75.75v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-1.5 0v-3.25H8a.75.75 0 0 1 0-1.5h3.25V8c0-.41.34-.75.75-.75M8 2.75a.75.75 0 0 1 0 1.5H6c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0V6c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanPlusRegular.displayName = 'ScanPlusRegular';

// Triple export pattern (lucide-react style)
export { ScanPlusRegular, ScanPlusRegular as ScanPlusRegularIcon, ScanPlusRegular as SiScanPlusRegular };
export default ScanPlusRegular;
export type { ScanPlusRegularProps };

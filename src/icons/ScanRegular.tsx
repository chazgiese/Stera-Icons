import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanRegularProps = Omit<IconBaseProps, 'children'>;

const ScanRegular = memo(
  forwardRef<SVGSVGElement, ScanRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan" {...props}>
      <path d="M4 14.75c.41 0 .75.34.75.75v1.75c0 1.1.9 2 2 2H8.5a.75.75 0 0 1 0 1.5H6.75a3.5 3.5 0 0 1-3.5-3.5V15.5c0-.41.34-.75.75-.75M20 14.75c.41 0 .75.34.75.75v1.75a3.5 3.5 0 0 1-3.5 3.5H15.5a.75.75 0 0 1 0-1.5h1.75a2 2 0 0 0 2-2V15.5c0-.41.34-.75.75-.75M8.5 3.25a.75.75 0 0 1 0 1.5H6.75a2 2 0 0 0-2 2V8.5a.75.75 0 0 1-1.5 0V6.75a3.5 3.5 0 0 1 3.5-3.5zM17.25 3.25a3.5 3.5 0 0 1 3.5 3.5V8.5a.75.75 0 0 1-1.5 0V6.75a2 2 0 0 0-2-2H15.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanRegular.displayName = 'ScanRegular';

// Triple export pattern (lucide-react style)
export { ScanRegular, ScanRegular as ScanRegularIcon, ScanRegular as SiScanRegular };
export default ScanRegular;
export type { ScanRegularProps };

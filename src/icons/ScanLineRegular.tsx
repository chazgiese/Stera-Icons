import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineRegularProps = Omit<IconBaseProps, 'children'>;

const ScanLineRegular = memo(
  forwardRef<SVGSVGElement, ScanLineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-line" {...props}>
      <path fill="currentColor" d="M20 14.75c.41 0 .75.34.75.75V17A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-1.5a.75.75 0 0 1 1.5 0V17c0 1.24 1 2.25 2.25 2.25h10c1.24 0 2.25-1 2.25-2.25v-1.5c0-.41.34-.75.75-.75M21.5 11.25a.75.75 0 0 1 0 1.5h-19a.75.75 0 0 1 0-1.5zM17 3.25A3.75 3.75 0 0 1 20.75 7v1.5a.75.75 0 0 1-1.5 0V7c0-1.24-1-2.25-2.25-2.25H7c-1.24 0-2.25 1-2.25 2.25v1.5a.75.75 0 0 1-1.5 0V7A3.75 3.75 0 0 1 7 3.25z" />
    </IconBase>
  ))
);

ScanLineRegular.displayName = 'ScanLineRegular';

// Triple export pattern (lucide-react style)
export { ScanLineRegular, ScanLineRegular as ScanLineRegularIcon, ScanLineRegular as SiScanLineRegular };
export default ScanLineRegular;
export type { ScanLineRegularProps };

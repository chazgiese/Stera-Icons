import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeRegularProps = Omit<IconBaseProps, 'children'>;

const ScanEyeRegular = memo(
  forwardRef<SVGSVGElement, ScanEyeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-eye" {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5H6A3.25 3.25 0 0 1 2.75 18v-2c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M12 6.75c3.24 0 6 2.06 7.2 4.96q.1.3 0 .58a7.8 7.8 0 0 1-7.2 4.96c-3.24 0-6-2.06-7.2-4.96a.8.8 0 0 1 0-.58A7.8 7.8 0 0 1 12 6.75m0 1.5A6.3 6.3 0 0 0 6.32 12 6.3 6.3 0 0 0 12 15.75 6.3 6.3 0 0 0 17.68 12 6.3 6.3 0 0 0 12 8.25" clipRule="evenodd" />
        <path d="M8 2.75a.75.75 0 0 1 0 1.5H6c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0V6c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanEyeRegular.displayName = 'ScanEyeRegular';

// Triple export pattern (lucide-react style)
export { ScanEyeRegular, ScanEyeRegular as ScanEyeRegularIcon, ScanEyeRegular as SiScanEyeRegular };
export default ScanEyeRegular;
export type { ScanEyeRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeRegularProps = Omit<IconBaseProps, 'children'>;

const ScanEyeRegular = memo(
  forwardRef<SVGSVGElement, ScanEyeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-eye" {...props}>
      <path fill="currentColor" d="M3 16.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2c0-.41.34-.75.75-.75M21 16.25c.41 0 .75.34.75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.75a8.4 8.4 0 0 1 7.69 4.95q.12.3 0 .6A8.4 8.4 0 0 1 12 17.25a8.4 8.4 0 0 1-7.69-4.95.8.8 0 0 1 0-.6A8.4 8.4 0 0 1 12 6.75m0 1.5A6.9 6.9 0 0 0 5.83 12 6.9 6.9 0 0 0 12 15.75 6.9 6.9 0 0 0 18.17 12 6.9 6.9 0 0 0 12 8.25" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanEyeRegular.displayName = 'ScanEyeRegular';

// Triple export pattern (lucide-react style)
export { ScanEyeRegular, ScanEyeRegular as ScanEyeRegularIcon, ScanEyeRegular as SiScanEyeRegular };
export default ScanEyeRegular;
export type { ScanEyeRegularProps };

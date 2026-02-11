import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-cube-fill-duotone" {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.36 5.55q.64-.13 1.28 0c.5.1.96.36 1.58.7l1.71.93c.67.36 1.18.63 1.55 1.03q.48.52.7 1.18c.18.53.17 1.1.17 1.86v1.5c0 .76 0 1.33-.17 1.86q-.21.67-.7 1.17c-.37.41-.88.68-1.55 1.04l-1.7.93c-.63.34-1.09.6-1.6.7q-.63.13-1.27 0c-.5-.1-.96-.36-1.58-.7l-1.71-.93c-.67-.36-1.18-.63-1.55-1.04a3 3 0 0 1-.7-1.17c-.18-.53-.17-1.1-.17-1.86v-1.5c0-.76 0-1.33.17-1.86q.21-.66.7-1.18c.37-.4.88-.67 1.55-1.03l1.7-.93c.63-.34 1.09-.6 1.6-.7m1.49 6.95v4.07l.56-.3 1.7-.94c.78-.42.99-.54 1.14-.7q.22-.24.33-.56c.06-.2.07-.44.07-1.32v-2.32zm-.55-5.3q-.3-.05-.6 0c-.2.05-.4.15-1.11.53l-1.7.93-.62.34L12 11.03 15.72 9l-.6-.34-1.71-.93a5 5 0 0 0-1.1-.52" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeFillDuotone.displayName = 'ScanCubeFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanCubeFillDuotone, ScanCubeFillDuotone as ScanCubeFillDuotoneIcon, ScanCubeFillDuotone as SiScanCubeFillDuotone };
export default ScanCubeFillDuotone;
export type { ScanCubeFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-dashed-duotone" {...props}>
      <path d="M4 14.75c.41 0 .75.34.75.75v2c0 .97.78 1.75 1.75 1.75h2a.75.75 0 0 1 0 1.5h-2a3.25 3.25 0 0 1-3.25-3.25v-2c0-.41.34-.75.75-.75M20 14.75c.41 0 .75.34.75.75v2c0 1.8-1.46 3.25-3.25 3.25h-2a.75.75 0 0 1 0-1.5h2c.97 0 1.75-.78 1.75-1.75v-2c0-.41.34-.75.75-.75M8.5 3.25a.75.75 0 0 1 0 1.5h-2c-.97 0-1.75.78-1.75 1.75v2a.75.75 0 0 1-1.5 0v-2c0-1.8 1.46-3.25 3.25-3.25zM17.5 3.25c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 0 1-1.5 0v-2c0-.97-.78-1.75-1.75-1.75h-2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M21.5 11.25a.75.75 0 0 1 0 1.5h-19a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScanDashedRegularDuotone.displayName = 'ScanDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ScanDashedRegularDuotone, ScanDashedRegularDuotone as ScanDashedRegularDuotoneIcon, ScanDashedRegularDuotone as SiScanDashedRegularDuotone };
export default ScanDashedRegularDuotone;
export type { ScanDashedRegularDuotoneProps };

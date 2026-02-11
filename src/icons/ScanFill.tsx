import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFillProps = Omit<IconBaseProps, 'children'>;

const ScanFill = memo(
  forwardRef<SVGSVGElement, ScanFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-fill" {...props}>
      <path d="M4 14c.83 0 1.5.67 1.5 1.5v1.75c0 .69.56 1.25 1.25 1.25H8.5a1.5 1.5 0 0 1 0 3H6.75a4.25 4.25 0 0 1-4.25-4.25V15.5c0-.83.67-1.5 1.5-1.5M20 14c.83 0 1.5.67 1.5 1.5v1.75c0 2.35-1.9 4.25-4.25 4.25H15.5a1.5 1.5 0 0 1 0-3h1.75c.69 0 1.25-.56 1.25-1.25V15.5c0-.83.67-1.5 1.5-1.5M8.5 2.5a1.5 1.5 0 1 1 0 3H6.75c-.69 0-1.25.56-1.25 1.25V8.5a1.5 1.5 0 1 1-3 0V6.75C2.5 4.4 4.4 2.5 6.75 2.5zM17.25 2.5c2.35 0 4.25 1.9 4.25 4.25V8.5a1.5 1.5 0 0 1-3 0V6.75c0-.69-.56-1.25-1.25-1.25H15.5a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanFill.displayName = 'ScanFill';

// Triple export pattern (lucide-react style)
export { ScanFill, ScanFill as ScanFillIcon, ScanFill as SiScanFill };
export default ScanFill;
export type { ScanFillProps };

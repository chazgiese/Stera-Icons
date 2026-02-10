import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanBoldProps = Omit<IconBaseProps, 'children'>;

const ScanBold = memo(
  forwardRef<SVGSVGElement, ScanBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-bold" {...props}>
      <path fill="currentColor" d="M4 14.5a1 1 0 0 1 1 1v1.75c0 .97.78 1.75 1.75 1.75H8.5a1 1 0 1 1 0 2H6.75A3.75 3.75 0 0 1 3 17.25V15.5a1 1 0 0 1 1-1M20 14.5a1 1 0 0 1 1 1v1.75A3.75 3.75 0 0 1 17.25 21H15.5a1 1 0 1 1 0-2h1.75c.97 0 1.75-.78 1.75-1.75V15.5a1 1 0 0 1 1-1M8.5 3a1 1 0 0 1 0 2H6.75C5.78 5 5 5.78 5 6.75V8.5a1 1 0 0 1-2 0V6.75A3.75 3.75 0 0 1 6.75 3zM17.25 3A3.75 3.75 0 0 1 21 6.75V8.5a1 1 0 1 1-2 0V6.75C19 5.78 18.22 5 17.25 5H15.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanBold.displayName = 'ScanBold';

// Triple export pattern (lucide-react style)
export { ScanBold, ScanBold as ScanBoldIcon, ScanBold as SiScanBold };
export default ScanBold;
export type { ScanBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 14.75c.69 0 1.25.56 1.25 1.25v2.25c0 .83.67 1.5 1.5 1.5H8c.69 0 1.25.56 1.25 1.25S8.69 22.25 8 22.25H5.75c-2.2 0-4-1.8-4-4V16c0-.69.56-1.25 1.25-1.25M21 14.75c.69 0 1.25.56 1.25 1.25v2.25c0 2.2-1.8 4-4 4H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.25c.83 0 1.5-.67 1.5-1.5V16c0-.69.56-1.25 1.25-1.25M8 1.75c.69 0 1.25.56 1.25 1.25S8.69 4.25 8 4.25H5.75c-.83 0-1.5.67-1.5 1.5V8c0 .69-.56 1.25-1.25 1.25S1.75 8.69 1.75 8V5.75c0-2.2 1.8-4 4-4zM18.25 1.75c2.2 0 4 1.8 4 4V8c0 .69-.56 1.25-1.25 1.25S19.75 8.69 19.75 8V5.75c0-.83-.67-1.5-1.5-1.5H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M12.5 12.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM16 8.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25S7.31 8.75 8 8.75z" />
    </IconBase>
  ))
);

ScanTextFillDuotone.displayName = 'ScanTextFillDuotone';

// Triple export pattern
export { ScanTextFillDuotone, ScanTextFillDuotone as ScanTextFillDuotoneIcon, ScanTextFillDuotone as SiScanTextFillDuotone };
export default ScanTextFillDuotone;
export type { ScanTextFillDuotoneProps };

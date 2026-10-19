import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedFillProps = Omit<IconBaseProps, 'children'>;

const ScanDashedFill = memo(
  forwardRef<SVGSVGElement, ScanDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 14.75c.69 0 1.25.56 1.25 1.25v1.5c0 .97.78 1.75 1.75 1.75H8c.69 0 1.25.56 1.25 1.25S8.69 21.75 8 21.75H6.5c-2.35 0-4.25-1.9-4.25-4.25V16c0-.69.56-1.25 1.25-1.25M20.5 14.75c.69 0 1.25.56 1.25 1.25v1.5c0 2.35-1.9 4.25-4.25 4.25H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.5c.97 0 1.75-.78 1.75-1.75V16c0-.69.56-1.25 1.25-1.25M22.5 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-21C.81 13.25.25 12.69.25 12s.56-1.25 1.25-1.25zM8 2.25c.69 0 1.25.56 1.25 1.25S8.69 4.75 8 4.75H6.5c-.97 0-1.75.78-1.75 1.75V8c0 .69-.56 1.25-1.25 1.25S2.25 8.69 2.25 8V6.5c0-2.35 1.9-4.25 4.25-4.25zM17.5 2.25c2.35 0 4.25 1.9 4.25 4.25V8c0 .69-.56 1.25-1.25 1.25S19.25 8.69 19.25 8V6.5c0-.97-.78-1.75-1.75-1.75H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ScanDashedFill.displayName = 'ScanDashedFill';

// Triple export pattern
export { ScanDashedFill, ScanDashedFill as ScanDashedFillIcon, ScanDashedFill as SiScanDashedFill };
export default ScanDashedFill;
export type { ScanDashedFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceFillProps = Omit<IconBaseProps, 'children'>;

const ScanFaceFill = memo(
  forwardRef<SVGSVGElement, ScanFaceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-fill" {...props}>
      <path fill="currentColor" d="M3.5 15a1 1 0 0 1 1 1v2c0 .83.67 1.5 1.5 1.5h2a1 1 0 1 1 0 2H6A3.5 3.5 0 0 1 2.5 18v-2a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v2a3.5 3.5 0 0 1-3.5 3.5h-2a1 1 0 1 1 0-2h2c.83 0 1.5-.67 1.5-1.5v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5m2.68 7.4a.63.63 0 0 0-.88.12 2.25 2.25 0 0 1-3.6 0 .63.63 0 0 0-1 .75 3.5 3.5 0 0 0 5.6 0 .63.63 0 0 0-.12-.88m-4.7-3.6a1 1 0 1 0 0 2.02 1 1 0 0 0 0-2.01m4.04 0a1 1 0 1 0 0 2.02 1 1 0 0 0 0-2.01" clipRule="evenodd" />
        <path fill="currentColor" d="M8 2.5a1 1 0 0 1 0 2H6c-.83 0-1.5.67-1.5 1.5v2a1 1 0 0 1-2 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v2a1 1 0 1 1-2 0V6c0-.83-.67-1.5-1.5-1.5h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanFaceFill.displayName = 'ScanFaceFill';

// Triple export pattern (lucide-react style)
export { ScanFaceFill, ScanFaceFill as ScanFaceFillIcon, ScanFaceFill as SiScanFaceFill };
export default ScanFaceFill;
export type { ScanFaceFillProps };

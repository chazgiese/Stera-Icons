import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchFillProps = Omit<IconBaseProps, 'children'>;

const ScanSearchFill = memo(
  forwardRef<SVGSVGElement, ScanSearchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 14.75c.69 0 1.25.56 1.25 1.25v2.25c0 .83.67 1.5 1.5 1.5H8c.69 0 1.25.56 1.25 1.25S8.69 22.25 8 22.25H5.75c-2.2 0-4-1.8-4-4V16c0-.69.56-1.25 1.25-1.25M21 14.75c.69 0 1.25.56 1.25 1.25v2.25c0 2.2-1.8 4-4 4H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h2.25c.83 0 1.5-.67 1.5-1.5V16c0-.69.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M11.04 6c2.78 0 5.04 2.26 5.04 5.04q-.01 1.28-.58 2.34l1.81 1.8c.59.6.59 1.54 0 2.13s-1.54.59-2.12 0l-1.81-1.8q-1.07.55-2.34.57C8.26 16.08 6 13.82 6 11.04S8.26 6 11.04 6m0 2.5c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54 2.54-1.14 2.54-2.54-1.14-2.54-2.54-2.54" clipRule="evenodd" />
        <path d="M8 1.75c.69 0 1.25.56 1.25 1.25S8.69 4.25 8 4.25H5.75c-.83 0-1.5.67-1.5 1.5V8c0 .69-.56 1.25-1.25 1.25S1.75 8.69 1.75 8V5.75c0-2.2 1.8-4 4-4zM18.25 1.75c2.2 0 4 1.8 4 4V8c0 .69-.56 1.25-1.25 1.25S19.75 8.69 19.75 8V5.75c0-.83-.67-1.5-1.5-1.5H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ScanSearchFill.displayName = 'ScanSearchFill';

// Triple export pattern
export { ScanSearchFill, ScanSearchFill as ScanSearchFillIcon, ScanSearchFill as SiScanSearchFill };
export default ScanSearchFill;
export type { ScanSearchFillProps };

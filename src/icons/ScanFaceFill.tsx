import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanFaceFillProps = Omit<IconBaseProps, 'children'>;

const ScanFaceFill = memo(
  forwardRef<SVGSVGElement, ScanFaceFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scan-face-fill" {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m2.68 7.64a.63.63 0 0 0-.88.13 2.25 2.25 0 0 1-3.6 0 .63.63 0 0 0-1 .75 3.5 3.5 0 0 0 5.6 0 .63.63 0 0 0-.12-.88m-4.7-3.58a1 1 0 1 0 0 2.01 1 1 0 0 0 0-2.01m4.04 0a1 1 0 1 0 0 2.01 1 1 0 0 0 0-2.01" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanFaceFill.displayName = 'ScanFaceFill';

// Triple export pattern (lucide-react style)
export { ScanFaceFill, ScanFaceFill as ScanFaceFillIcon, ScanFaceFill as SiScanFaceFill };
export type { ScanFaceFillProps };

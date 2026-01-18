import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanEyeFillProps = Omit<IconBaseProps, 'children'>;

const ScanEyeFill = memo(
  forwardRef<SVGSVGElement, ScanEyeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 6.75a8.4 8.4 0 0 1 7.69 4.95q.12.3 0 .6A8.4 8.4 0 0 1 12 17.25a8.4 8.4 0 0 1-7.69-4.95.8.8 0 0 1 0-.6A8.4 8.4 0 0 1 12 6.75m0 2.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ScanEyeFill.displayName = 'ScanEyeFill';

// Triple export pattern (lucide-react style)
export { ScanEyeFill, ScanEyeFill as ScanEyeFillIcon, ScanEyeFill as SiScanEyeFill };
export type { ScanEyeFillProps };

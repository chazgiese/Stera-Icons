import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.25c0 .97.78 1.75 1.75 1.75H8c.55 0 1 .45 1 1s-.45 1-1 1H5.75C3.68 22 2 20.32 2 18.25V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.25c0 2.07-1.68 3.75-3.75 3.75H16c-.55 0-1-.45-1-1s.45-1 1-1h2.25c.97 0 1.75-.78 1.75-1.75V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.75C4.78 4 4 4.78 4 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C2 3.68 3.68 2 5.75 2zM18.25 2C20.32 2 22 3.68 22 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C20 4.78 19.22 4 18.25 4H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M13.8 13.26c.25-.33.72-.4 1.05-.14.33.24.4.71.15 1.05-.68.9-1.77 1.5-3 1.5s-2.32-.6-3-1.5c-.25-.34-.18-.8.15-1.05s.8-.19 1.05.14c.41.55 1.06.9 1.8.9s1.39-.35 1.8-.9M9.9 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05M14.1 9.45c.58 0 1.05.47 1.05 1.05s-.47 1.05-1.05 1.05-1.05-.47-1.05-1.05.47-1.05 1.05-1.05" />
        <path fillRule="evenodd" d="M12 5.13c3.8 0 6.88 3.07 6.88 6.87S15.8 18.88 12 18.88 5.13 15.8 5.13 12 8.2 5.13 12 5.13m0 1.75c-2.83 0-5.12 2.29-5.12 5.12s2.29 5.13 5.12 5.13 5.13-2.3 5.13-5.13-2.3-5.12-5.13-5.12" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceBoldDuotone.displayName = 'ScanFaceBoldDuotone';

// Triple export pattern
export { ScanFaceBoldDuotone, ScanFaceBoldDuotone as ScanFaceBoldDuotoneIcon, ScanFaceBoldDuotone as SiScanFaceBoldDuotone };
export default ScanFaceBoldDuotone;
export type { ScanFaceBoldDuotoneProps };

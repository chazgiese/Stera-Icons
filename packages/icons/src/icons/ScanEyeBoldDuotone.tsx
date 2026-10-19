import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.25c0 .97.78 1.75 1.75 1.75H8c.55 0 1 .45 1 1s-.45 1-1 1H5.75C3.68 22 2 20.32 2 18.25V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.25c0 2.07-1.68 3.75-3.75 3.75H16c-.55 0-1-.45-1-1s.45-1 1-1h2.25c.97 0 1.75-.78 1.75-1.75V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.75C4.78 4 4 4.78 4 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C2 3.68 3.68 2 5.75 2zM18.25 2C20.32 2 22 3.68 22 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C20 4.78 19.22 4 18.25 4H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M12 6.5c3.35 0 6.2 2.13 7.42 5.12q.15.38 0 .76C18.2 15.37 15.35 17.5 12 17.5s-6.19-2.13-7.42-5.12q-.15-.38 0-.76C5.8 8.63 8.65 6.5 12 6.5m0 2c-2.32 0-4.38 1.4-5.4 3.5 1.02 2.1 3.08 3.5 5.4 3.5s4.38-1.4 5.4-3.5c-1.02-2.1-3.07-3.5-5.4-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeBoldDuotone.displayName = 'ScanEyeBoldDuotone';

// Triple export pattern
export { ScanEyeBoldDuotone, ScanEyeBoldDuotone as ScanEyeBoldDuotoneIcon, ScanEyeBoldDuotone as SiScanEyeBoldDuotone };
export default ScanEyeBoldDuotone;
export type { ScanEyeBoldDuotoneProps };

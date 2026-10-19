import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.25c0 .97.78 1.75 1.75 1.75H8c.55 0 1 .45 1 1s-.45 1-1 1H5.75C3.68 22 2 20.32 2 18.25V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.25c0 2.07-1.68 3.75-3.75 3.75H16c-.55 0-1-.45-1-1s.45-1 1-1h2.25c.97 0 1.75-.78 1.75-1.75V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.75C4.78 4 4 4.78 4 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C2 3.68 3.68 2 5.75 2zM18.25 2C20.32 2 22 3.68 22 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C20 4.78 19.22 4 18.25 4H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 6.25c2.64 0 4.79 2.14 4.79 4.79q-.01 1.32-.64 2.38l1.94 1.95c.5.48.5 1.28 0 1.76-.49.5-1.28.5-1.76 0l-1.95-1.94q-1.06.62-2.38.64c-2.65 0-4.79-2.15-4.79-4.8s2.14-4.78 4.79-4.78m0 2c-1.54 0-2.79 1.25-2.79 2.79s1.25 2.79 2.79 2.79 2.79-1.25 2.79-2.8c0-1.53-1.25-2.78-2.8-2.78" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchBoldDuotone.displayName = 'ScanSearchBoldDuotone';

// Triple export pattern
export { ScanSearchBoldDuotone, ScanSearchBoldDuotone as ScanSearchBoldDuotoneIcon, ScanSearchBoldDuotone as SiScanSearchBoldDuotone };
export default ScanSearchBoldDuotone;
export type { ScanSearchBoldDuotoneProps };

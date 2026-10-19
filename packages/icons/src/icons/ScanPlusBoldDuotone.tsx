import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.25c0 .97.78 1.75 1.75 1.75H8c.55 0 1 .45 1 1s-.45 1-1 1H5.75C3.68 22 2 20.32 2 18.25V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.25c0 2.07-1.68 3.75-3.75 3.75H16c-.55 0-1-.45-1-1s.45-1 1-1h2.25c.97 0 1.75-.78 1.75-1.75V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.75C4.78 4 4 4.78 4 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C2 3.68 3.68 2 5.75 2zM18.25 2C20.32 2 22 3.68 22 5.75V8c0 .55-.45 1-1 1s-1-.45-1-1V5.75C20 4.78 19.22 4 18.25 4H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M12 7c.55 0 1 .45 1 1v3h3c.56 0 1 .44 1 1 0 .55-.44 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1 0-.56.45-1 1-1h3V8c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ScanPlusBoldDuotone.displayName = 'ScanPlusBoldDuotone';

// Triple export pattern
export { ScanPlusBoldDuotone, ScanPlusBoldDuotone as ScanPlusBoldDuotoneIcon, ScanPlusBoldDuotone as SiScanPlusBoldDuotone };
export default ScanPlusBoldDuotone;
export type { ScanPlusBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15c.55 0 1 .45 1 1v2.5c0 .83.67 1.5 1.5 1.5H8c.55 0 1 .45 1 1s-.45 1-1 1H5.5C3.57 22 2 20.43 2 18.5V16c0-.55.45-1 1-1M21 15c.55 0 1 .45 1 1v2.5c0 1.93-1.57 3.5-3.5 3.5H16c-.55 0-1-.45-1-1s.45-1 1-1h2.5c.83 0 1.5-.67 1.5-1.5V16c0-.55.45-1 1-1M8 2c.55 0 1 .45 1 1s-.45 1-1 1H5.5C4.67 4 4 4.67 4 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5C2 3.57 3.57 2 5.5 2zM18.5 2C20.43 2 22 3.57 22 5.5V8c0 .55-.45 1-1 1s-1-.45-1-1V5.5c0-.83-.67-1.5-1.5-1.5H16c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.33 5.4q.67-.15 1.34 0c.53.1 1.02.38 1.62.71l1.71.94c.66.35 1.2.63 1.6 1.06q.48.53.73 1.23c.18.56.17 1.16.17 1.91v1.5c0 .75.01 1.35-.17 1.9q-.24.71-.73 1.24c-.4.43-.94.7-1.6 1.07l-1.7.93c-.61.33-1.1.6-1.63.71q-.67.15-1.34 0c-.53-.1-1.02-.38-1.62-.71L8 16.96c-.66-.36-1.2-.64-1.6-1.07q-.5-.53-.73-1.23c-.18-.56-.17-1.16-.17-1.9v-1.5c0-.76-.01-1.36.17-1.92q.24-.7.73-1.23c.4-.43.94-.7 1.6-1.06l1.7-.94c.61-.33 1.1-.6 1.63-.71M7.5 10.69v2.06c0 .89.01 1.1.07 1.28q.09.27.3.5c.12.13.3.25 1.08.67l1.71.93.34.18V12.6zm5.5 1.9v3.72l.34-.18 1.7-.93c.78-.42.97-.54 1.1-.67q.2-.23.29-.5c.06-.18.07-.4.07-1.28V10.7zm-.73-5.23q-.27-.06-.54 0c-.17.03-.35.12-1.07.5l-1.7.94-.37.2L12 10.86 15.4 9l-.35-.2-1.71-.93c-.72-.4-.9-.48-1.07-.51" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeBoldDuotone.displayName = 'ScanCubeBoldDuotone';

// Triple export pattern
export { ScanCubeBoldDuotone, ScanCubeBoldDuotone as ScanCubeBoldDuotoneIcon, ScanCubeBoldDuotone as SiScanCubeBoldDuotone };
export default ScanCubeBoldDuotone;
export type { ScanCubeBoldDuotoneProps };

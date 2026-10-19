import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.75c3.24 0 6 2.06 7.2 4.96q.1.3 0 .58c-1.2 2.9-3.96 4.96-7.2 4.96s-6-2.06-7.2-4.96q-.1-.3 0-.58C6 8.81 8.77 6.75 12 6.75M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeFillDuotone.displayName = 'ScanEyeFillDuotone';

// Triple export pattern
export { ScanEyeFillDuotone, ScanEyeFillDuotone as ScanEyeFillDuotoneIcon, ScanEyeFillDuotone as SiScanEyeFillDuotone };
export default ScanEyeFillDuotone;
export type { ScanEyeFillDuotoneProps };

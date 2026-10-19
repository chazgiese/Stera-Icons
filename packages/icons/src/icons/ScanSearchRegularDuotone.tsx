import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 6.5c2.5 0 4.54 2.03 4.54 4.54 0 .9-.26 1.72-.7 2.42l2.08 2.08c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-2.08-2.08c-.7.44-1.53.7-2.42.7-2.5 0-4.54-2.03-4.54-4.54 0-2.5 2.03-4.54 4.54-4.54m0 1.5C9.36 8 8 9.36 8 11.04s1.36 3.04 3.04 3.04 3.04-1.36 3.04-3.04S12.72 8 11.04 8" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchRegularDuotone.displayName = 'ScanSearchRegularDuotone';

// Triple export pattern
export { ScanSearchRegularDuotone, ScanSearchRegularDuotone as ScanSearchRegularDuotoneIcon, ScanSearchRegularDuotone as SiScanSearchRegularDuotone };
export default ScanSearchRegularDuotone;
export type { ScanSearchRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.25c.41 0 .75.34.75.75v2.25c0 1.1.9 2 2 2H8c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.93 0-3.5-1.57-3.5-3.5V16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75v2.25c0 1.93-1.57 3.5-3.5 3.5H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c1.1 0 2-.9 2-2V16c0-.41.34-.75.75-.75M8 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H5.75c-1.1 0-2 .9-2 2V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.93 1.57-3.5 3.5-3.5zM18.25 2.25c1.93 0 3.5 1.57 3.5 3.5V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.75c0-1.1-.9-2-2-2H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M12 7.25c.41 0 .75.34.75.75v3.25H16c.42 0 .75.33.75.75 0 .4-.33.75-.75.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.4 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ScanPlusRegularDuotone.displayName = 'ScanPlusRegularDuotone';

// Triple export pattern
export { ScanPlusRegularDuotone, ScanPlusRegularDuotone as ScanPlusRegularDuotoneIcon, ScanPlusRegularDuotone as SiScanPlusRegularDuotone };
export default ScanPlusRegularDuotone;
export type { ScanPlusRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 15.25c.41 0 .75.34.75.75v1.5c0 2.07-1.68 3.75-3.75 3.75h-11c-2.07 0-3.75-1.68-3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.24 1 2.25 2.25 2.25h11c1.24 0 2.25-1 2.25-2.25V16c0-.41.34-.75.75-.75M17.5 2.75c2.07 0 3.75 1.68 3.75 3.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-1.24-1-2.25-2.25-2.25h-11c-1.24 0-2.25 1-2.25 2.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-2.07 1.68-3.75 3.75-3.75z" opacity={0.4} />
        <path d="M22.5 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-21c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanLineRegularDuotone.displayName = 'ScanLineRegularDuotone';

// Triple export pattern
export { ScanLineRegularDuotone, ScanLineRegularDuotone as ScanLineRegularDuotoneIcon, ScanLineRegularDuotone as SiScanLineRegularDuotone };
export default ScanLineRegularDuotone;
export type { ScanLineRegularDuotoneProps };

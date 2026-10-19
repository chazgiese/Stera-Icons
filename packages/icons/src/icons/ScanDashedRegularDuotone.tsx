import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ScanDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.25c.41 0 .75.34.75.75v1.5c0 1.24 1 2.25 2.25 2.25H8c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75-1.68-3.75-3.75V16c0-.41.34-.75.75-.75M20.5 15.25c.41 0 .75.34.75.75v1.5c0 2.07-1.68 3.75-3.75 3.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c1.24 0 2.25-1 2.25-2.25V16c0-.41.34-.75.75-.75M8 2.75c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-1.24 0-2.25 1-2.25 2.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-2.07 1.68-3.75 3.75-3.75zM17.5 2.75c2.07 0 3.75 1.68 3.75 3.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5c0-1.24-1-2.25-2.25-2.25H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M22.5 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-21c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ScanDashedRegularDuotone.displayName = 'ScanDashedRegularDuotone';

// Triple export pattern
export { ScanDashedRegularDuotone, ScanDashedRegularDuotone as ScanDashedRegularDuotoneIcon, ScanDashedRegularDuotone as SiScanDashedRegularDuotone };
export default ScanDashedRegularDuotone;
export type { ScanDashedRegularDuotoneProps };

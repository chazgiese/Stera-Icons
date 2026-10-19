import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanLineFillProps = Omit<IconBaseProps, 'children'>;

const ScanLineFill = memo(
  forwardRef<SVGSVGElement, ScanLineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.75c.41 0 .75.34.75.75v2c0 2.07-1.68 3.75-3.75 3.75h-11c-2.07 0-3.75-1.68-3.75-3.75v-2c0-.41.34-.75.75-.75zM22.5 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-21c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM17.5 2.75c2.07 0 3.75 1.68 3.75 3.75v2c0 .41-.34.75-.75.75h-17c-.41 0-.75-.34-.75-.75v-2c0-2.07 1.68-3.75 3.75-3.75z" />
    </IconBase>
  ))
);

ScanLineFill.displayName = 'ScanLineFill';

// Triple export pattern
export { ScanLineFill, ScanLineFill as ScanLineFillIcon, ScanLineFill as SiScanLineFill };
export default ScanLineFill;
export type { ScanLineFillProps };

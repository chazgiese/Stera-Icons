import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanDashedFillProps = Omit<IconBaseProps, 'children'>;

const ScanDashedFill = memo(
  forwardRef<SVGSVGElement, ScanDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 15.5c.83 0 1.5.67 1.5 1.5v2c0 .28.22.5.5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19v-2c0-.83.67-1.5 1.5-1.5M21 15.5c.83 0 1.5.67 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2c0-.83.67-1.5 1.5-1.5M22.5 10.5a1.5 1.5 0 0 1 0 3h-21a1.5 1.5 0 0 1 0-3zM7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 5 1.5zM19 1.5A3.5 3.5 0 0 1 22.5 5v2a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

ScanDashedFill.displayName = 'ScanDashedFill';

export { ScanDashedFill };
export type { ScanDashedFillProps };

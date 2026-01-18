import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScanTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 16a1 1 0 0 1 1 1v2.5c0 .28.22.5.5.5H7a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V17a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5H17a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 .5-.5V17a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H4.5a.5.5 0 0 0-.5.5V7a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2zM19.5 2A2.5 2.5 0 0 1 22 4.5V7a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H17a1 1 0 1 1 0-2z" />
        <path fill="currentColor" d="M13 14.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM17 10.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1 0-3zM17 6.5a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ScanTextFillDuotone.displayName = 'ScanTextFillDuotone';

export { ScanTextFillDuotone };
export type { ScanTextFillDuotoneProps };

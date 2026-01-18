import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineDescFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineDescFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineDescFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M2.1 2.8a1.5 1.5 0 0 1 2.1.3l5.25 7 4.88-2.44a1.5 1.5 0 0 1 1.72.27l.09.1 6 7a1.5 1.5 0 0 1-2.28 1.95l-5.24-6.12-4.95 2.48a1.5 1.5 0 0 1-1.87-.44l-6-8a1.5 1.5 0 0 1 .3-2.1" />
    </IconBase>
  ))
);

ChartLineDescFillDuotone.displayName = 'ChartLineDescFillDuotone';

export { ChartLineDescFillDuotone };
export type { ChartLineDescFillDuotoneProps };

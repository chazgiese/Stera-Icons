import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M19.8 3.1a1.5 1.5 0 0 1 2.4 1.8l-6 8a1.5 1.5 0 0 1-1.87.44l-4.95-2.48-5.24 6.12a1.5 1.5 0 0 1-2.28-1.96l6-7 .09-.09a1.5 1.5 0 0 1 1.72-.27l4.88 2.44z" />
    </IconBase>
  ))
);

ChartLineFillDuotone.displayName = 'ChartLineFillDuotone';

export { ChartLineFillDuotone };
export type { ChartLineFillDuotoneProps };

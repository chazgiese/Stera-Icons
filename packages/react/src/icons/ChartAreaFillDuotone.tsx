import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartAreaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartAreaFillDuotone = memo(
  forwardRef<SVGSVGElement, ChartAreaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M23.25 17.75a2 2 0 0 1-2 2H1.5q.3 0 .53-.22l7.47-7.47 2.97 2.97.12.1a.75.75 0 0 0 .94-.1l9.5-9.5a.8.8 0 0 0 .22-.53z" opacity={.4} />
        <path fill="currentColor" d="M21.97 4.47a.75.75 0 1 1 1.06 1.06l-9.5 9.5c-.3.3-.77.3-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 1 1-1.06-1.06l8-8 .11-.1a.75.75 0 0 1 .95.1L13 13.44z" />
    </IconBase>
  ))
);

ChartAreaFillDuotone.displayName = 'ChartAreaFillDuotone';

export { ChartAreaFillDuotone };
export type { ChartAreaFillDuotoneProps };

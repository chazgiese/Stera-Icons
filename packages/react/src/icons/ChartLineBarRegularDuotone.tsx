import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineBarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartLineBarRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartLineBarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5 17.75c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75M9 13.75c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-5.5c0-.41.34-.75.75-.75M13 15.5c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-3.75c0-.41.34-.75.75-.75M17 12.75c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0v-6.5c0-.41.34-.75.75-.75M21 8.5c.41 0 .75.34.75.75V20a.75.75 0 0 1-1.5 0V9.25c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M21.46 3.48a.75.75 0 0 1 1.08 1.04l-9 9.5a.75.75 0 0 1-1.07.01L9.5 11.06l-6.97 6.97a.75.75 0 1 1-1.06-1.06l7.5-7.5.11-.1a.75.75 0 0 1 .95.1l2.95 2.95z" />
    </IconBase>
  ))
);

ChartLineBarRegularDuotone.displayName = 'ChartLineBarRegularDuotone';

export { ChartLineBarRegularDuotone };
export type { ChartLineBarRegularDuotoneProps };

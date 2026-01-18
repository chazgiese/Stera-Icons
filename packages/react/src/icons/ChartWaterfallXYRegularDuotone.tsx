import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartWaterfallXYRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartWaterfallXYRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChartWaterfallXYRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 3.25c.41 0 .75.34.75.75v12.8q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H22a.75.75 0 0 1 0 1.5H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M6 12.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M10.67 7.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V8c0-.41.33-.75.75-.75M20 2.25c.42 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75M15.33 4.25c.42 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ChartWaterfallXYRegularDuotone.displayName = 'ChartWaterfallXYRegularDuotone';

export { ChartWaterfallXYRegularDuotone };
export type { ChartWaterfallXYRegularDuotoneProps };

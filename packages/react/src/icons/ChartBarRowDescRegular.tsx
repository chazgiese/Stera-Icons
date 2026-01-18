import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowDescRegularProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescRegular = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 22.75c.41 0 .75-.34.75-.75v-.25h6a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-.07-.5h2.07a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-.07-.5h2.07a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2h-14V2a.75.75 0 0 0-1.5 0v20c0 .41.34.75.75.75m.75-14.5v-4.5h14c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-.5.5zm0 1.5h10c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-.5.5h-10zm0 6h6c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-.5.5h-6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowDescRegular.displayName = 'ChartBarRowDescRegular';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescRegular, ChartBarRowDescRegular as ChartBarRowDescRegularIcon, ChartBarRowDescRegular as SiChartBarRowDescRegular };
export type { ChartBarRowDescRegularProps };

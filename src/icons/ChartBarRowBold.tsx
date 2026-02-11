import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-bold" {...props}>
      <path fillRule="evenodd" d="M5 2a1 1 0 0 1 1 1h11.75C18.99 3 20 4 20 5.25v2.83c0 1.25-1 2.25-2.25 2.25h-4.76l.01.25v2.84l-.01.25h1.26c1.24 0 2.25 1 2.25 2.25v2.83c0 1.24-1 2.25-2.25 2.25H6v.1a1 1 0 0 1-2-.1V3a1 1 0 0 1 1-1m1 17h8.25q.23-.02.25-.25v-2.83a.25.25 0 0 0-.25-.25H6zm0-5.33h4.75c.14 0 .25-.12.25-.25v-2.84a.25.25 0 0 0-.25-.25H6zm0-5.34h11.75q.23-.01.25-.25V5.25a.25.25 0 0 0-.25-.25H6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowBold.displayName = 'ChartBarRowBold';

// Triple export pattern (lucide-react style)
export { ChartBarRowBold, ChartBarRowBold as ChartBarRowBoldIcon, ChartBarRowBold as SiChartBarRowBold };
export default ChartBarRowBold;
export type { ChartBarRowBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarRowDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-row-desc-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 2a1 1 0 0 1 1 1h11.75C18.99 3 20 4 20 5.25v2.83c0 1.25-1 2.25-2.25 2.25h-1.26l.01.25v2.84c0 1.24-1 2.25-2.25 2.25h-1.26l.01.25v2.83c0 1.24-1 2.25-2.25 2.25H6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m1 13.67V19h4.75q.23-.02.25-.25v-2.83a.25.25 0 0 0-.25-.25zm0-2h8.25q.23-.02.25-.25v-2.84a.25.25 0 0 0-.25-.25H6zm0-5.34h11.75q.23-.01.25-.25V5.25a.25.25 0 0 0-.25-.25H6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowDescBold.displayName = 'ChartBarRowDescBold';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescBold, ChartBarRowDescBold as ChartBarRowDescBoldIcon, ChartBarRowDescBold as SiChartBarRowDescBold };
export default ChartBarRowDescBold;
export type { ChartBarRowDescBoldProps };

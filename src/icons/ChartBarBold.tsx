import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarBold = memo(
  forwardRef<SVGSVGElement, ChartBarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-bold" {...props}>
      <path fillRule="evenodd" d="M8.08 4c1.25 0 2.25 1 2.25 2.25v4.76l.25-.01h2.84l.25.01V9.75c0-1.24 1-2.25 2.25-2.25h2.83c1.24 0 2.25 1 2.25 2.25V18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2V6.25C3 5.01 4 4 5.25 4zM5.25 6a.25.25 0 0 0-.25.25V18h3.33V6.25A.25.25 0 0 0 8.08 6zm5.33 7a.25.25 0 0 0-.25.25V18h3.34v-4.75a.25.25 0 0 0-.25-.25zm5.34-3.5a.25.25 0 0 0-.25.25V18H19V9.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarBold.displayName = 'ChartBarBold';

// Triple export pattern (lucide-react style)
export { ChartBarBold, ChartBarBold as ChartBarBoldIcon, ChartBarBold as SiChartBarBold };
export default ChartBarBold;
export type { ChartBarBoldProps };

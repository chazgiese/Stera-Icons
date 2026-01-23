import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartBarBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarBold = memo(
  forwardRef<SVGSVGElement, ChartBarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-bar-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.75 3C8.99 3 10 4 10 5.25v5.76l.25-.01h3.5l.25.01V9.25C14 8.01 15 7 16.25 7h3.5C20.99 7 22 8 22 9.25V19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V5.25C2 4.01 3 3 4.25 3zm-3.5 2a.25.25 0 0 0-.25.25V19h4V5.25A.25.25 0 0 0 7.75 5zm6 8a.25.25 0 0 0-.25.25V19h4v-5.75a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V9.25a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarBold.displayName = 'ChartBarBold';

// Triple export pattern (lucide-react style)
export { ChartBarBold, ChartBarBold as ChartBarBoldIcon, ChartBarBold as SiChartBarBold };
export default ChartBarBold;
export type { ChartBarBoldProps };

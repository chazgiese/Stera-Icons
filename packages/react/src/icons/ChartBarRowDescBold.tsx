import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartBarRowDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartBarRowDescBold = memo(
  forwardRef<SVGSVGElement, ChartBarRowDescBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4 23a1 1 0 0 0 1-1h5.75c1.24 0 2.25-1 2.25-2.25v-3.5l-.01-.25h1.76c1.24 0 2.25-1 2.25-2.25v-3.5l-.01-.25h1.76C19.99 10 21 9 21 7.75v-3.5C21 3.01 20 2 18.75 2H5v-.1A1 1 0 0 0 3 2v20a1 1 0 0 0 1 1M5 8V4h13.75c.14 0 .25.11.25.25v3.5c0 .14-.11.25-.25.25zm0 2h9.75q.23.02.25.25v3.5q-.02.23-.25.25H5zm0 6h5.75q.23.02.25.25v3.5q-.02.23-.25.25H5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartBarRowDescBold.displayName = 'ChartBarRowDescBold';

// Triple export pattern (lucide-react style)
export { ChartBarRowDescBold, ChartBarRowDescBold as ChartBarRowDescBoldIcon, ChartBarRowDescBold as SiChartBarRowDescBold };
export type { ChartBarRowDescBoldProps };

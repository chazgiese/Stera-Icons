import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartAreaBoldProps = Omit<IconBaseProps, 'children'>;

const ChartAreaBold = memo(
  forwardRef<SVGSVGElement, ChartAreaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.8 4.3a1 1 0 0 1 1.7.7v12.75c0 1.24-1 2.25-2.25 2.25H1.5a1 1 0 0 1-.7-1.7l8-8 .07-.07a1 1 0 0 1 1.34.06L13 13.1zm-8.1 10.9a1 1 0 0 1-1.4 0l-2.8-2.79L3.91 18h17.34q.23-.02.25-.25V7.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartAreaBold.displayName = 'ChartAreaBold';

// Triple export pattern (lucide-react style)
export { ChartAreaBold, ChartAreaBold as ChartAreaBoldIcon, ChartAreaBold as SiChartAreaBold };
export type { ChartAreaBoldProps };

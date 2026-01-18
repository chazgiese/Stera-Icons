import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartPieAltBoldProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltBold = memo(
  forwardRef<SVGSVGElement, ChartPieAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.6 1.92a1 1 0 1 1 .8 1.83 9 9 0 0 0 6.89 16.63 1 1 0 0 1 .73 1.86Q14.14 23 12 23A11 11 0 0 1 7.6 1.92" />
        <path fill="currentColor" fillRule="evenodd" d="m13.1 1.05.38.05a11.01 11.01 0 0 1 7.04 17.86c-.77.94-2.1.87-2.86.11l-6.37-6.36A1 1 0 0 1 11 12V3c0-1 .79-1.94 1.88-1.96zm.66 11.3 5.27 5.27a9 9 0 0 0 1.62-8.12zM13 10.5l6.88-2.85A9 9 0 0 0 13 3.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieAltBold.displayName = 'ChartPieAltBold';

// Triple export pattern (lucide-react style)
export { ChartPieAltBold, ChartPieAltBold as ChartPieAltBoldIcon, ChartPieAltBold as SiChartPieAltBold };
export type { ChartPieAltBoldProps };

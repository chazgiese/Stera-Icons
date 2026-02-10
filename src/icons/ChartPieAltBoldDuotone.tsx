import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChartPieAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChartPieAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChartPieAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chart-pie-alt-bold-duotone" {...props}>
      <path fill="currentColor" d="M8.11 2.79a1 1 0 0 1 .78 1.84 8 8 0 0 0 6.12 14.79 1 1 0 1 1 .75 1.85A10 10 0 0 1 8.11 2.79" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 0 1 7.07 17.07 1 1 0 0 1-1.41 0l-6.37-6.36A1 1 0 0 1 11 12V3a1 1 0 0 1 1-1m1.76 10.35 4.56 4.55a8 8 0 0 0 1.4-7.01zM13 10.5l5.95-2.46A8 8 0 0 0 13 4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieAltBoldDuotone.displayName = 'ChartPieAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChartPieAltBoldDuotone, ChartPieAltBoldDuotone as ChartPieAltBoldDuotoneIcon, ChartPieAltBoldDuotone as SiChartPieAltBoldDuotone };
export default ChartPieAltBoldDuotone;
export type { ChartPieAltBoldDuotoneProps };

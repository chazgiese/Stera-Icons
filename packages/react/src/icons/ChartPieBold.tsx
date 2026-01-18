import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartPieBoldProps = Omit<IconBaseProps, 'children'>;

const ChartPieBold = memo(
  forwardRef<SVGSVGElement, ChartPieBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.6 1.92a1 1 0 1 1 .8 1.83A9 9 0 1 0 20.25 15.6a1 1 0 1 1 1.83.8A11 11 0 1 1 7.6 1.92" />
        <path fill="currentColor" fillRule="evenodd" d="m13.1 1.05.4.05a11 11 0 0 1 9.45 9.8c.12 1.2-.88 2.1-1.95 2.1h-8a2 2 0 0 1-2-2V3c0-1 .78-1.94 1.88-1.96zM13 11h7.94A9 9 0 0 0 13 3.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChartPieBold.displayName = 'ChartPieBold';

// Triple export pattern (lucide-react style)
export { ChartPieBold, ChartPieBold as ChartPieBoldIcon, ChartPieBold as SiChartPieBold };
export type { ChartPieBoldProps };

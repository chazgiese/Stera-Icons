import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChartLineXYDescBoldProps = Omit<IconBaseProps, 'children'>;

const ChartLineXYDescBold = memo(
  forwardRef<SVGSVGElement, ChartLineXYDescBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2 3a1 1 0 0 1 1 1v12.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H22a1 1 0 1 1 0 2H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 17.6 1 16.8V4a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M5.32 6.26a1 1 0 0 1 1.42.06l4.83 5.27 2.46-2.23.08-.07a1 1 0 0 1 1.34.14l5.3 5.9a1 1 0 0 1-1.5 1.34l-4.62-5.16-2.46 2.23a1 1 0 0 1-1.4-.06l-5.5-6a1 1 0 0 1 .05-1.42" />
    </IconBase>
  ))
);

ChartLineXYDescBold.displayName = 'ChartLineXYDescBold';

export { ChartLineXYDescBold };
export type { ChartLineXYDescBoldProps };

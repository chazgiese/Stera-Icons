import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownRegularProps = Omit<IconBaseProps, 'children'>;

const TrendDownRegular = memo(
  forwardRef<SVGSVGElement, TrendDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down" {...props}>
      <path d="M1.97 5.22c.29-.3.76-.3 1.06 0l6.7 6.62 2.65-2.6a.75.75 0 0 1 1.05 0l7.32 7.22v-3.21a.75.75 0 1 1 1.5 0v5l-.01.13v.01l-.02.07-.03.07q0 .05-.04.08 0 .03-.03.05v.02a1 1 0 0 1-.2.19l-.13.07-.05.01a1 1 0 0 1-.24.05h-5a.75.75 0 0 1 0-1.5h3.17l-6.77-6.68-2.64 2.6a.75.75 0 0 1-1.05 0L1.97 6.29a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

TrendDownRegular.displayName = 'TrendDownRegular';

// Triple export pattern (lucide-react style)
export { TrendDownRegular, TrendDownRegular as TrendDownRegularIcon, TrendDownRegular as SiTrendDownRegular };
export default TrendDownRegular;
export type { TrendDownRegularProps };

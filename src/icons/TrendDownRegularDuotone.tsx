import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-duotone" {...props}>
      <path d="M1.97 5.22c.29-.3.76-.3 1.06 0l6.7 6.62 2.65-2.6a.75.75 0 0 1 1.05 0l7.32 7.22v1.04h-1.08l-6.77-6.68-2.64 2.6a.75.75 0 0 1-1.05 0L1.97 6.29a.75.75 0 0 1 0-1.06" opacity={.4} />
        <path d="M21.5 12.5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75h-5a.75.75 0 0 1 0-1.5h4.25v-4.25c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TrendDownRegularDuotone.displayName = 'TrendDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrendDownRegularDuotone, TrendDownRegularDuotone as TrendDownRegularDuotoneIcon, TrendDownRegularDuotone as SiTrendDownRegularDuotone };
export default TrendDownRegularDuotone;
export type { TrendDownRegularDuotoneProps };

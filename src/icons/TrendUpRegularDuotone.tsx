import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-duotone" {...props}>
      <path fill="currentColor" d="M1.97 18.78c.29.3.76.3 1.06 0l6.7-6.62 2.65 2.6c.29.3.76.3 1.05 0l7.32-7.22V6.5h-1.08l-6.77 6.68-2.64-2.6a.75.75 0 0 0-1.05 0l-7.24 7.14c-.3.29-.3.76 0 1.06" opacity={.4} />
        <path fill="currentColor" d="M21.5 11.5c.41 0 .75-.34.75-.75v-5A.75.75 0 0 0 21.5 5h-5a.75.75 0 0 0 0 1.5h4.25v4.25c0 .41.34.75.75.75" />
    </IconBase>
  ))
);

TrendUpRegularDuotone.displayName = 'TrendUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpRegularDuotone, TrendUpRegularDuotone as TrendUpRegularDuotoneIcon, TrendUpRegularDuotone as SiTrendUpRegularDuotone };
export default TrendUpRegularDuotone;
export type { TrendUpRegularDuotoneProps };

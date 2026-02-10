import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M1.79 18.95a1 1 0 0 0 1.41.01l6.54-6.45 2.46 2.43a1 1 0 0 0 1.4 0l6.9-6.8V6.75h-1.44l-6.16 6.08-2.46-2.43a1 1 0 0 0-1.33-.07l-.07.07-7.24 7.14a1 1 0 0 0-.01 1.41" opacity={.4} />
        <path fill="currentColor" d="M21.5 11.75a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

TrendUpBoldDuotone.displayName = 'TrendUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpBoldDuotone, TrendUpBoldDuotone as TrendUpBoldDuotoneIcon, TrendUpBoldDuotone as SiTrendUpBoldDuotone };
export default TrendUpBoldDuotone;
export type { TrendUpBoldDuotoneProps };

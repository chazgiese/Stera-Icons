import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpBoldProps = Omit<IconBaseProps, 'children'>;

const TrendUpBold = memo(
  forwardRef<SVGSVGElement, TrendUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-bold" {...props}>
      <path fill="currentColor" d="M1.79 18.95a1 1 0 0 0 1.41.01l6.54-6.45 2.46 2.43a1 1 0 0 0 1.4 0l6.9-6.8v2.61a1 1 0 1 0 2 0v-5a1 1 0 0 0-.04-.29l-.02-.04-.08-.17q0-.03-.03-.05l-.02-.03a1 1 0 0 0-.34-.3 1 1 0 0 0-.47-.12h-5a1 1 0 0 0 0 2h2.56l-6.16 6.08-2.46-2.43a1 1 0 0 0-1.33-.07l-.07.07-7.24 7.14a1 1 0 0 0-.01 1.41" />
    </IconBase>
  ))
);

TrendUpBold.displayName = 'TrendUpBold';

// Triple export pattern (lucide-react style)
export { TrendUpBold, TrendUpBold as TrendUpBoldIcon, TrendUpBold as SiTrendUpBold };
export default TrendUpBold;
export type { TrendUpBoldProps };

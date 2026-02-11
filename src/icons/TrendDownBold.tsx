import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownBoldProps = Omit<IconBaseProps, 'children'>;

const TrendDownBold = memo(
  forwardRef<SVGSVGElement, TrendDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-bold" {...props}>
      <path d="M1.79 5.05a1 1 0 0 1 1.41-.01l6.54 6.45 2.46-2.43a1 1 0 0 1 1.4 0l6.9 6.8v-2.61a1 1 0 0 1 2 0v5a1 1 0 0 1-.04.29l-.02.04-.08.17q0 .03-.03.05l-.02.03a1 1 0 0 1-.34.3 1 1 0 0 1-.47.12h-5a1 1 0 0 1 0-2h2.56l-6.16-6.08-2.46 2.43a1 1 0 0 1-1.33.07l-.07-.07L1.8 6.46a1 1 0 0 1-.01-1.41" />
    </IconBase>
  ))
);

TrendDownBold.displayName = 'TrendDownBold';

// Triple export pattern (lucide-react style)
export { TrendDownBold, TrendDownBold as TrendDownBoldIcon, TrendDownBold as SiTrendDownBold };
export default TrendDownBold;
export type { TrendDownBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-bold" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M15.75 6.89a1 1 0 0 1 1.32 1.44l-.04.04-.1.14-1.41 2.03a60 60 0 0 1-2.1 2.87 2 2 0 1 1-2.78-2.88c.4-.34 1.7-1.26 2.82-2.05l2.17-1.51.04-.03zM6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66PercentBold.displayName = 'GaugeDots66PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentBold, GaugeDots66PercentBold as GaugeDots66PercentBoldIcon, GaugeDots66PercentBold as SiGaugeDots66PercentBold };
export default GaugeDots66PercentBold;
export type { GaugeDots66PercentBoldProps };

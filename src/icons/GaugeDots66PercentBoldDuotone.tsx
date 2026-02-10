import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M15.75 6.89a1 1 0 0 1 1.32 1.44l-.04.04-.1.14-.33.5-1.08 1.54a60 60 0 0 1-2.1 2.86 2 2 0 1 1-2.78-2.88c.4-.34 1.7-1.26 2.82-2.05l2.03-1.42.14-.1.04-.02z" />
    </IconBase>
  ))
);

GaugeDots66PercentBoldDuotone.displayName = 'GaugeDots66PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentBoldDuotone, GaugeDots66PercentBoldDuotone as GaugeDots66PercentBoldDuotoneIcon, GaugeDots66PercentBoldDuotone as SiGaugeDots66PercentBoldDuotone };
export default GaugeDots66PercentBoldDuotone;
export type { GaugeDots66PercentBoldDuotoneProps };

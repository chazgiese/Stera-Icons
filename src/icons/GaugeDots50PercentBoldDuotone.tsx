import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-50-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 .98.82l.01.06.03.16.44 2.44A60 60 0 0 1 14 12a2 2 0 1 1-4-.08c.04-.52.3-2.08.54-3.44l.44-2.44q0-.1.03-.16v-.06l.03-.09A1 1 0 0 1 12 5" />
    </IconBase>
  ))
);

GaugeDots50PercentBoldDuotone.displayName = 'GaugeDots50PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentBoldDuotone, GaugeDots50PercentBoldDuotone as GaugeDots50PercentBoldDuotoneIcon, GaugeDots50PercentBoldDuotone as SiGaugeDots50PercentBoldDuotone };
export default GaugeDots50PercentBoldDuotone;
export type { GaugeDots50PercentBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12.08 10c.52.04 2.08.3 3.44.54l2.44.44q.1 0 .16.03h.06l.09.03a1 1 0 0 1-.09 1.94l-.06.01-.16.03-2.44.44A60 60 0 0 1 12 14a2 2 0 1 1 .08-4" />
    </IconBase>
  ))
);

GaugeDots85PercentBoldDuotone.displayName = 'GaugeDots85PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentBoldDuotone, GaugeDots85PercentBoldDuotone as GaugeDots85PercentBoldDuotoneIcon, GaugeDots85PercentBoldDuotone as SiGaugeDots85PercentBoldDuotone };
export default GaugeDots85PercentBoldDuotone;
export type { GaugeDots85PercentBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M10.59 10.59a2 2 0 0 1 2.88.05c.34.4 1.26 1.7 2.05 2.82l1.42 2.03.1.14.02.04.05.08a1 1 0 0 1-1.44 1.32l-.04-.04-.63-.43-1.54-1.08a61 61 0 0 1-2.87-2.1 2 2 0 0 1 0-2.83" />
    </IconBase>
  ))
);

GaugeDots100PercentBoldDuotone.displayName = 'GaugeDots100PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentBoldDuotone, GaugeDots100PercentBoldDuotone as GaugeDots100PercentBoldDuotoneIcon, GaugeDots100PercentBoldDuotone as SiGaugeDots100PercentBoldDuotone };
export default GaugeDots100PercentBoldDuotone;
export type { GaugeDots100PercentBoldDuotoneProps };

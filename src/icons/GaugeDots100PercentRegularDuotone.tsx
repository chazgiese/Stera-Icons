import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-duotone" {...props}>
      <path d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M10.76 10.76c.69-.68 1.8-.68 2.48 0l.04.04c.32.38 1.4 1.82 2.38 3.14l1.31 1.78.43.57.11.16.04.05.08.12a.75.75 0 0 1-1.12.93l-.06-.04-.16-.11-.57-.43-1.78-1.31a105 105 0 0 1-3.18-2.42 1.75 1.75 0 0 1 0-2.48" />
    </IconBase>
  ))
);

GaugeDots100PercentRegularDuotone.displayName = 'GaugeDots100PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentRegularDuotone, GaugeDots100PercentRegularDuotone as GaugeDots100PercentRegularDuotoneIcon, GaugeDots100PercentRegularDuotone as SiGaugeDots100PercentRegularDuotone };
export default GaugeDots100PercentRegularDuotone;
export type { GaugeDots100PercentRegularDuotoneProps };

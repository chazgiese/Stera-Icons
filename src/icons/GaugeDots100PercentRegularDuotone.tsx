import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-duotone" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 9 9a1.25 1.25 0 0 1-1.77-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M10.76 10.76a1.75 1.75 0 0 1 2.52.04c.33.39 1.24 1.67 2.03 2.8l1.08 1.54.34.5.1.13.03.04a.75.75 0 0 1-1.04 1.05l-.05-.03-.14-.1-2.03-1.42a61 61 0 0 1-2.84-2.07 1.75 1.75 0 0 1 0-2.48" />
    </IconBase>
  ))
);

GaugeDots100PercentRegularDuotone.displayName = 'GaugeDots100PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentRegularDuotone, GaugeDots100PercentRegularDuotone as GaugeDots100PercentRegularDuotoneIcon, GaugeDots100PercentRegularDuotone as SiGaugeDots100PercentRegularDuotone };
export default GaugeDots100PercentRegularDuotone;
export type { GaugeDots100PercentRegularDuotoneProps };

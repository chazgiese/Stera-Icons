import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots50PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .74.64l.01.07.03.19.1.7.34 2.2a105 105 0 0 1 .53 3.95 1.75 1.75 0 0 1-3.5 0v-.06c.04-.5.3-2.28.53-3.9l.33-2.19.1-.7.04-.2V4.9l.04-.14c.1-.3.39-.5.71-.5" />
    </IconBase>
  ))
);

GaugeDots50PercentRegularDuotone.displayName = 'GaugeDots50PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentRegularDuotone, GaugeDots50PercentRegularDuotone as GaugeDots50PercentRegularDuotoneIcon, GaugeDots50PercentRegularDuotone as SiGaugeDots50PercentRegularDuotone };
export type { GaugeDots50PercentRegularDuotoneProps };

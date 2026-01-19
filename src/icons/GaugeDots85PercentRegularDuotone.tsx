import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots85PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-duotone" {...props}>
      <path d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12.06 10.25c.5.04 2.28.3 3.9.53l2.89.44.2.03h.06l.14.04a.75.75 0 0 1-.14 1.45l-.07.01-.19.03-2.9.44a105 105 0 0 1-3.95.53 1.75 1.75 0 0 1 0-3.5z" />
    </IconBase>
  ))
);

GaugeDots85PercentRegularDuotone.displayName = 'GaugeDots85PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentRegularDuotone, GaugeDots85PercentRegularDuotone as GaugeDots85PercentRegularDuotoneIcon, GaugeDots85PercentRegularDuotone as SiGaugeDots85PercentRegularDuotone };
export default GaugeDots85PercentRegularDuotone;
export type { GaugeDots85PercentRegularDuotoneProps };

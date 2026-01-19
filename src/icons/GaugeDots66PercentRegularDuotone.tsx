import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots66PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-duotone" {...props}>
      <path d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M16.62 6.37a.75.75 0 0 1 .93 1.12l-.04.06-.11.16a530 530 0 0 1-4.12 5.48l-.04.05a1.75 1.75 0 0 1-2.48-2.48l.04-.04c.38-.32 1.83-1.4 3.14-2.38l1.78-1.32.57-.42.16-.11.05-.04z" />
    </IconBase>
  ))
);

GaugeDots66PercentRegularDuotone.displayName = 'GaugeDots66PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentRegularDuotone, GaugeDots66PercentRegularDuotone as GaugeDots66PercentRegularDuotoneIcon, GaugeDots66PercentRegularDuotone as SiGaugeDots66PercentRegularDuotone };
export default GaugeDots66PercentRegularDuotone;
export type { GaugeDots66PercentRegularDuotoneProps };

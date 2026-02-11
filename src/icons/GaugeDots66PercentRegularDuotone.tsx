import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-duotone" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 8.99 9a1.25 1.25 0 0 1-1.76-1.77M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M15.82 7.14a.75.75 0 0 1 1.04 1.04l-.03.05-.1.14-.34.5-1.08 1.53a61 61 0 0 1-2.07 2.84 1.75 1.75 0 1 1-2.44-2.52c.39-.33 1.67-1.24 2.8-2.03l1.54-1.08.5-.34.13-.1z" />
    </IconBase>
  ))
);

GaugeDots66PercentRegularDuotone.displayName = 'GaugeDots66PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentRegularDuotone, GaugeDots66PercentRegularDuotone as GaugeDots66PercentRegularDuotoneIcon, GaugeDots66PercentRegularDuotone as SiGaugeDots66PercentRegularDuotone };
export default GaugeDots66PercentRegularDuotone;
export type { GaugeDots66PercentRegularDuotoneProps };

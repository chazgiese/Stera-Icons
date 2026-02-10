import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-duotone" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 8.99 9a1.25 1.25 0 0 1-1.76-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12.06 10.25c.5.04 2.05.3 3.41.54l2.44.43.17.03.05.01a.75.75 0 0 1 0 1.48h-.05l-.17.04-2.44.43a61 61 0 0 1-3.47.54 1.75 1.75 0 1 1 .06-3.5" />
    </IconBase>
  ))
);

GaugeDots85PercentRegularDuotone.displayName = 'GaugeDots85PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentRegularDuotone, GaugeDots85PercentRegularDuotone as GaugeDots85PercentRegularDuotoneIcon, GaugeDots85PercentRegularDuotone as SiGaugeDots85PercentRegularDuotone };
export default GaugeDots85PercentRegularDuotone;
export type { GaugeDots85PercentRegularDuotoneProps };

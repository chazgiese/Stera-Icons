import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-50-percent" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M12 5.25c.36 0 .67.26.74.62v.05l.04.17.43 2.44a61 61 0 0 1 .54 3.47 1.75 1.75 0 1 1-3.5-.06c.04-.5.3-2.05.54-3.41l.43-2.44.03-.17.01-.05a.75.75 0 0 1 .74-.62M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 8.99 9a1.25 1.25 0 0 1-1.76-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50PercentRegular.displayName = 'GaugeDots50PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentRegular, GaugeDots50PercentRegular as GaugeDots50PercentRegularIcon, GaugeDots50PercentRegular as SiGaugeDots50PercentRegular };
export default GaugeDots50PercentRegular;
export type { GaugeDots50PercentRegularProps };

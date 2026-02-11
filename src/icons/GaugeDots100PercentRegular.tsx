import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M10.76 10.76a1.75 1.75 0 0 1 2.52.04c.33.39 1.24 1.67 2.03 2.8l1.42 2.03.1.14.03.04a.75.75 0 0 1-1.04 1.05l-.05-.03-.14-.1-.5-.34-1.53-1.08c-1.13-.8-2.41-1.7-2.8-2.03l-.04-.04a1.75 1.75 0 0 1 0-2.48M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 9 9a1.25 1.25 0 0 1-1.77-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100PercentRegular.displayName = 'GaugeDots100PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentRegular, GaugeDots100PercentRegular as GaugeDots100PercentRegularIcon, GaugeDots100PercentRegular as SiGaugeDots100PercentRegular };
export default GaugeDots100PercentRegular;
export type { GaugeDots100PercentRegularProps };

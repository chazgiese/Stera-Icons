import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-15-percent" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M12 10.25a1.75 1.75 0 1 1-.06 3.5c-.5-.04-2.05-.3-3.41-.54l-2.44-.43-.17-.03-.05-.01a.75.75 0 0 1 0-1.48h.05l.17-.04 2.44-.43a61 61 0 0 1 3.47-.54M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 8.99 9a1.25 1.25 0 0 1-1.76-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15PercentRegular.displayName = 'GaugeDots15PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentRegular, GaugeDots15PercentRegular as GaugeDots15PercentRegularIcon, GaugeDots15PercentRegular as SiGaugeDots15PercentRegular };
export default GaugeDots15PercentRegular;
export type { GaugeDots15PercentRegularProps };

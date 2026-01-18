import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots50PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a.75.75 0 0 1 .74.64l.01.07.03.19.1.7.34 2.2a105 105 0 0 1 .53 3.95 1.75 1.75 0 0 1-3.5 0v-.06c.04-.5.3-2.28.53-3.9l.33-2.19.1-.7.04-.2V4.9l.04-.14c.1-.3.39-.5.71-.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50PercentRegular.displayName = 'GaugeDots50PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentRegular, GaugeDots50PercentRegular as GaugeDots50PercentRegularIcon, GaugeDots50PercentRegular as SiGaugeDots50PercentRegular };
export type { GaugeDots50PercentRegularProps };

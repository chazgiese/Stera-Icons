import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots66PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.62 6.38a.75.75 0 0 1 .93 1.11l-.04.06-.11.16-.43.57-1.31 1.78a106 106 0 0 1-2.42 3.18 1.75 1.75 0 1 1-2.48-2.48l.04-.04c.38-.32 1.83-1.4 3.14-2.38l1.78-1.31.57-.43.16-.11.05-.04zM5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66PercentRegular.displayName = 'GaugeDots66PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentRegular, GaugeDots66PercentRegular as GaugeDots66PercentRegularIcon, GaugeDots66PercentRegular as SiGaugeDots66PercentRegular };
export type { GaugeDots66PercentRegularProps };

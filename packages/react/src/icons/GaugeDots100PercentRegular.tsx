import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots100PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M10.76 10.76c.69-.68 1.8-.68 2.48 0l.04.04c.32.38 1.4 1.83 2.38 3.14l1.31 1.78.43.57.11.16.04.05.07.12a.75.75 0 0 1-1.11.93l-.06-.04-.16-.11-.57-.43-1.78-1.31a106 106 0 0 1-3.18-2.42 1.75 1.75 0 0 1 0-2.48M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100PercentRegular.displayName = 'GaugeDots100PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentRegular, GaugeDots100PercentRegular as GaugeDots100PercentRegularIcon, GaugeDots100PercentRegular as SiGaugeDots100PercentRegular };
export type { GaugeDots100PercentRegularProps };

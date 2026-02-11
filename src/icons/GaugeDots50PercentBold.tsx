import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-50-percent-bold" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1 1 0 0 1 .98.82l.01.06.03.16.44 2.44A61 61 0 0 1 14 12a2 2 0 1 1-4-.08c.04-.52.3-2.08.54-3.44l.44-2.44q0-.1.03-.16v-.06l.03-.09A1 1 0 0 1 12 5M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50PercentBold.displayName = 'GaugeDots50PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentBold, GaugeDots50PercentBold as GaugeDots50PercentBoldIcon, GaugeDots50PercentBold as SiGaugeDots50PercentBold };
export default GaugeDots50PercentBold;
export type { GaugeDots50PercentBoldProps };

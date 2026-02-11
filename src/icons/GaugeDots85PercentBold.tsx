import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-bold" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12.08 10c.52.04 2.08.3 3.44.54l2.44.44q.1 0 .16.03h.06l.09.03a1 1 0 0 1-.09 1.94l-.06.01-.16.03-2.44.44A61 61 0 0 1 12 14a2 2 0 1 1 .08-4M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots85PercentBold.displayName = 'GaugeDots85PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentBold, GaugeDots85PercentBold as GaugeDots85PercentBoldIcon, GaugeDots85PercentBold as SiGaugeDots85PercentBold };
export default GaugeDots85PercentBold;
export type { GaugeDots85PercentBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots66PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.36 6.25a1 1 0 0 1 1.45 1.32l-.06.08-.04.05-.11.16-1.74 2.35a105 105 0 0 1-2.45 3.2 2 2 0 0 1-2.82-2.82l.05-.06c.39-.33 1.84-1.42 3.15-2.39l1.78-1.32.57-.42.16-.11.04-.04zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66PercentBold.displayName = 'GaugeDots66PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentBold, GaugeDots66PercentBold as GaugeDots66PercentBoldIcon, GaugeDots66PercentBold as SiGaugeDots66PercentBold };
export type { GaugeDots66PercentBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots66PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-bold-duotone" {...props}>
      <path d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M16.36 6.24a1 1 0 0 1 1.4 1.4l-.01.02-.04.04-.11.16a574 574 0 0 1-4.13 5.5l-.06.05a2 2 0 0 1-2.82-2.82l.05-.06a105 105 0 0 1 3.15-2.39l1.78-1.32.57-.42.16-.11.04-.04z" />
    </IconBase>
  ))
);

GaugeDots66PercentBoldDuotone.displayName = 'GaugeDots66PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentBoldDuotone, GaugeDots66PercentBoldDuotone as GaugeDots66PercentBoldDuotoneIcon, GaugeDots66PercentBoldDuotone as SiGaugeDots66PercentBoldDuotone };
export type { GaugeDots66PercentBoldDuotoneProps };

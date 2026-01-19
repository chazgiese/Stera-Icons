import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots100PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-bold-duotone" {...props}>
      <path d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M10.59 10.59a2 2 0 0 1 2.82 0l.06.05c.33.39 1.42 1.84 2.39 3.15l1.32 1.78.42.57.11.16.04.04v.01l.06.08a1 1 0 0 1-1.45 1.32h-.02l-.04-.04-.16-.11-.57-.43-1.78-1.31a105 105 0 0 1-3.2-2.45 2 2 0 0 1 0-2.82" />
    </IconBase>
  ))
);

GaugeDots100PercentBoldDuotone.displayName = 'GaugeDots100PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentBoldDuotone, GaugeDots100PercentBoldDuotone as GaugeDots100PercentBoldDuotoneIcon, GaugeDots100PercentBoldDuotone as SiGaugeDots100PercentBoldDuotone };
export default GaugeDots100PercentBoldDuotone;
export type { GaugeDots100PercentBoldDuotoneProps };

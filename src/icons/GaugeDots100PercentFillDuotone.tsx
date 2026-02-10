import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m4.6-4.6a1.88 1.88 0 1 0-2.6 2.7c.38.34 1.67 1.25 2.8 2.05l2.03 1.42.14.09.04.03a.88.88 0 0 0 1.3-1.08l-.08-.14-.03-.04-.1-.14-1.41-2.03a61 61 0 0 0-2.1-2.86M6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.79 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M10.67 10.67a1.9 1.9 0 0 1 2.7.05c.34.4 1.25 1.68 2.05 2.8l1.42 2.04.09.14.03.04.08.14a.88.88 0 0 1-1.3 1.08l-.04-.03-.14-.1-2.03-1.41a60 60 0 0 1-2.86-2.1 1.9 1.9 0 0 1 0-2.65M6 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M18 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M6.79 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 4.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

GaugeDots100PercentFillDuotone.displayName = 'GaugeDots100PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentFillDuotone, GaugeDots100PercentFillDuotone as GaugeDots100PercentFillDuotoneIcon, GaugeDots100PercentFillDuotone as SiGaugeDots100PercentFillDuotone };
export default GaugeDots100PercentFillDuotone;
export type { GaugeDots100PercentFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m4.6-4.6a1.88 1.88 0 1 0-2.6 2.7c.38.34 1.67 1.25 2.8 2.05l2.03 1.42.14.09.04.03a.88.88 0 0 0 1.3-1.08l-.08-.13-.03-.05-.1-.14-1.41-2.03a61 61 0 0 0-2.1-2.86M6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100PercentFill.displayName = 'GaugeDots100PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentFill, GaugeDots100PercentFill as GaugeDots100PercentFillIcon, GaugeDots100PercentFill as SiGaugeDots100PercentFill };
export default GaugeDots100PercentFill;
export type { GaugeDots100PercentFillProps };

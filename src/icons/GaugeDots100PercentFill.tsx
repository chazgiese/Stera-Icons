import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots100PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-100-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.01-4.51a2 2 0 1 0-2.77 2.88c.39.33 1.84 1.42 3.15 2.39l1.78 1.32.57.42.16.11.04.04h.01a1 1 0 0 0 1.4-1.4l-.04-.05-.11-.16-1.74-2.35a105 105 0 0 0-2.4-3.15zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100PercentFill.displayName = 'GaugeDots100PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentFill, GaugeDots100PercentFill as GaugeDots100PercentFillIcon, GaugeDots100PercentFill as SiGaugeDots100PercentFill };
export default GaugeDots100PercentFill;
export type { GaugeDots100PercentFillProps };

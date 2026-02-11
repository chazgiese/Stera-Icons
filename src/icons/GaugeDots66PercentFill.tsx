import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots66PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m-.35-8.13a.9.9 0 0 0-.98-.18l-.13.08-.05.03-.14.1-2.03 1.41a61 61 0 0 0-2.86 2.1 1.88 1.88 0 1 0 2.7 2.6c.34-.4 1.25-1.68 2.05-2.8l1.42-2.04.09-.14.03-.04a.9.9 0 0 0-.1-1.12M6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots66PercentFill.displayName = 'GaugeDots66PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentFill, GaugeDots66PercentFill as GaugeDots66PercentFillIcon, GaugeDots66PercentFill as SiGaugeDots66PercentFill };
export default GaugeDots66PercentFill;
export type { GaugeDots66PercentFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m5.21 13.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m-3.88-4.6a1.9 1.9 0 0 0-2.7.05 60 60 0 0 0-2.05 2.8l-1.41 2.04-.1.14-.03.04a.88.88 0 0 0 1.08 1.3l.13-.08.05-.03.14-.1 2.03-1.41a61 61 0 0 0 2.86-2.1c.73-.73.73-1.91 0-2.65M6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentFill.displayName = 'GaugeDots0PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentFill, GaugeDots0PercentFill as GaugeDots0PercentFillIcon, GaugeDots0PercentFill as SiGaugeDots0PercentFill };
export default GaugeDots0PercentFill;
export type { GaugeDots0PercentFillProps };

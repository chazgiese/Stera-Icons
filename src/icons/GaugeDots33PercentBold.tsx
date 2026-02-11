import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent-bold" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M7.05 7.05a1 1 0 0 1 1.28-.11l.04.03.14.1 2.03 1.41a60 60 0 0 1 2.87 2.1 2 2 0 1 1-2.88 2.78c-.34-.4-1.26-1.69-2.05-2.82L7.06 8.51l-.1-.14-.02-.04-.05-.08a1 1 0 0 1 .16-1.2M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentBold.displayName = 'GaugeDots33PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentBold, GaugeDots33PercentBold as GaugeDots33PercentBoldIcon, GaugeDots33PercentBold as SiGaugeDots33PercentBold };
export default GaugeDots33PercentBold;
export type { GaugeDots33PercentBoldProps };

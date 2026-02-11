import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M6.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path d="M7.05 7.05a1 1 0 0 1 1.28-.12l.04.04.14.1 2.04 1.41a61 61 0 0 1 2.86 2.1 2 2 0 1 1-2.88 2.78c-.34-.4-1.26-1.69-2.05-2.82L7.06 8.51l-.1-.14-.02-.04-.05-.08a1 1 0 0 1 .16-1.2" />
    </IconBase>
  ))
);

GaugeDots33PercentBoldDuotone.displayName = 'GaugeDots33PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentBoldDuotone, GaugeDots33PercentBoldDuotone as GaugeDots33PercentBoldDuotoneIcon, GaugeDots33PercentBoldDuotone as SiGaugeDots33PercentBoldDuotone };
export default GaugeDots33PercentBoldDuotone;
export type { GaugeDots33PercentBoldDuotoneProps };

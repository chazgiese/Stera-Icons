import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-15-percent-bold-duotone" {...props}>
      <path d="M7.05 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 14.83a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M17.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.05 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M14.83 7.05a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12M12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12 10a2 2 0 1 1-.08 4c-.52-.04-2.08-.3-3.44-.54l-2.44-.44q-.1 0-.16-.03h-.06l-.09-.03a1 1 0 0 1 .09-1.94l.06-.01.16-.03 2.44-.44A60 60 0 0 1 12 10" />
    </IconBase>
  ))
);

GaugeDots15PercentBoldDuotone.displayName = 'GaugeDots15PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentBoldDuotone, GaugeDots15PercentBoldDuotone as GaugeDots15PercentBoldDuotoneIcon, GaugeDots15PercentBoldDuotone as SiGaugeDots15PercentBoldDuotone };
export default GaugeDots15PercentBoldDuotone;
export type { GaugeDots15PercentBoldDuotoneProps };

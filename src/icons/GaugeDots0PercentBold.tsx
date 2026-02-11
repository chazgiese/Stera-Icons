import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent-bold" {...props}>
      <path d="M14.92 14.92a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M10.67 10.67a1.88 1.88 0 1 1 2.6 2.7c-.38.34-1.67 1.25-2.8 2.05l-2.03 1.42-.14.09-.04.03-.14.08a.88.88 0 0 1-1.08-1.3l.03-.04.1-.14 1.41-2.03a60 60 0 0 1 2.1-2.86M6.5 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M17.5 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M7.14 7.14a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M14.92 7.14a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 5.13a1.38 1.38 0 1 1 0 2.75 1.38 1.38 0 0 1 0-2.75" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentBold.displayName = 'GaugeDots0PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentBold, GaugeDots0PercentBold as GaugeDots0PercentBoldIcon, GaugeDots0PercentBold as SiGaugeDots0PercentBold };
export default GaugeDots0PercentBold;
export type { GaugeDots0PercentBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots50PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12 4a1 1 0 0 1 .99.85v.07q.03.05.04.2L13.46 8A105 105 0 0 1 14 12a2 2 0 0 1-4 0v-.08c.04-.5.3-2.3.54-3.91l.43-2.9.03-.2v-.04l.01-.02A1 1 0 0 1 12 4" />
    </IconBase>
  ))
);

GaugeDots50PercentBoldDuotone.displayName = 'GaugeDots50PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentBoldDuotone, GaugeDots50PercentBoldDuotone as GaugeDots50PercentBoldDuotoneIcon, GaugeDots50PercentBoldDuotone as SiGaugeDots50PercentBoldDuotone };
export type { GaugeDots50PercentBoldDuotoneProps };

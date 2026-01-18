import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots50PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1 1 0 0 1 .99.85v.07q.03.05.04.2L13.46 8A105 105 0 0 1 14 12a2 2 0 0 1-4 0v-.08c.04-.5.3-2.3.54-3.91l.43-2.9.03-.2v-.04l.01-.02A1 1 0 0 1 12 4M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots50PercentBold.displayName = 'GaugeDots50PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentBold, GaugeDots50PercentBold as GaugeDots50PercentBoldIcon, GaugeDots50PercentBold as SiGaugeDots50PercentBold };
export type { GaugeDots50PercentBoldProps };

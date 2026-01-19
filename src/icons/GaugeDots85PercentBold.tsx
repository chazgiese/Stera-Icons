import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots85PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-bold" {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12.08 10c.5.04 2.3.3 3.91.54l2.9.43.2.03h.04l.02.01a1 1 0 0 1 0 1.98h-.07q-.05.03-.2.04l-2.89.43A105 105 0 0 1 12 14a2 2 0 0 1 0-4zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots85PercentBold.displayName = 'GaugeDots85PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentBold, GaugeDots85PercentBold as GaugeDots85PercentBoldIcon, GaugeDots85PercentBold as SiGaugeDots85PercentBold };
export type { GaugeDots85PercentBoldProps };

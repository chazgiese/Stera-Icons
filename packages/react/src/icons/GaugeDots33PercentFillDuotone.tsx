import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots33PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M6.34 6.34a1 1 0 0 1 1.3-.1l.02.01.04.04.16.11 2.35 1.74a105 105 0 0 1 3.2 2.45 2 2 0 0 1-2.82 2.82l-.06-.05c-.33-.39-1.42-1.84-2.39-3.15L6.4 7.86 6.3 7.7l-.04-.04v-.01l-.06-.08a1 1 0 0 1 .15-1.23M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.64 6.24A1 1 0 0 0 6.2 7.57l.06.08.04.05.11.16 1.74 2.35c.97 1.3 2.06 2.76 2.4 3.15l.05.05a2 2 0 1 0 2.77-2.88c-.39-.33-1.84-1.42-3.15-2.39L7.86 6.4 7.7 6.3l-.04-.04zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-1.9-4.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

GaugeDots33PercentFillDuotone.displayName = 'GaugeDots33PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentFillDuotone, GaugeDots33PercentFillDuotone as GaugeDots33PercentFillDuotoneIcon, GaugeDots33PercentFillDuotone as SiGaugeDots33PercentFillDuotone };
export type { GaugeDots33PercentFillDuotoneProps };

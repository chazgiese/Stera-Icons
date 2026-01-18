import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots15PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4h-.08c-.5-.04-2.3-.3-3.91-.54l-2.9-.43-.2-.03h-.04l-.02-.01a1 1 0 0 1 0-1.98h.07q.05-.03.2-.04L8 10.54A105 105 0 0 1 12 10" />
    </IconBase>
  ))
);

GaugeDots15PercentBoldDuotone.displayName = 'GaugeDots15PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentBoldDuotone, GaugeDots15PercentBoldDuotone as GaugeDots15PercentBoldDuotoneIcon, GaugeDots15PercentBoldDuotone as SiGaugeDots15PercentBoldDuotone };
export type { GaugeDots15PercentBoldDuotoneProps };

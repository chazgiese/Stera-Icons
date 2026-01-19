import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots15PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-15-percent-bold" {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10a2 2 0 1 1 0 4h-.08c-.5-.04-2.3-.3-3.91-.54l-2.9-.43-.2-.03h-.04l-.02-.01a1 1 0 0 1 0-1.98h.07q.05-.03.2-.04L8 10.54A105 105 0 0 1 12 10M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15PercentBold.displayName = 'GaugeDots15PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentBold, GaugeDots15PercentBold as GaugeDots15PercentBoldIcon, GaugeDots15PercentBold as SiGaugeDots15PercentBold };
export default GaugeDots15PercentBold;
export type { GaugeDots15PercentBoldProps };

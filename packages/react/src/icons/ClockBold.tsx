import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ClockBoldProps = Omit<IconBaseProps, 'children'>;

const ClockBold = memo(
  forwardRef<SVGSVGElement, ClockBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.59l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ClockBold.displayName = 'ClockBold';

// Triple export pattern (lucide-react style)
export { ClockBold, ClockBold as ClockBoldIcon, ClockBold as SiClockBold };
export type { ClockBoldProps };

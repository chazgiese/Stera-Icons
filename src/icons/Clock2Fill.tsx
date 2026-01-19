import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock2FillProps = Omit<IconBaseProps, 'children'>;

const Clock2Fill = memo(
  forwardRef<SVGSVGElement, Clock2FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-2-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6.03q0 .07.02.15v.03l.02.09.01.02v.02l.03.06.03.05q0 .02.02.03v.02l.02.03.03.04.03.05.02.02.13.13.06.05.04.02.09.05.02.01.07.03.02.01.07.02.04.01.1.02h.11L12 13h.11l.07-.02h.03l.04-.01.06-.02.03-.01.06-.02.05-.03.03-.02h.02l3.46-2a1 1 0 0 0-1-1.74L13 10.27V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Fill.displayName = 'Clock2Fill';

// Triple export pattern (lucide-react style)
export { Clock2Fill, Clock2Fill as Clock2FillIcon, Clock2Fill as SiClock2Fill };
export type { Clock2FillProps };

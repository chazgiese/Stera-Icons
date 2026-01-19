import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock11FillProps = Omit<IconBaseProps, 'children'>;

const Clock11Fill = memo(
  forwardRef<SVGSVGElement, Clock11FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v2.27l-.13-.23a1 1 0 0 0-1.74 1l2 3.46.02.02.03.05.03.05.02.02.07.08q.03 0 .04.03l.03.03.05.04.04.02.09.05.02.01.07.03.02.01.07.02.04.01.1.02h.11L12 13h.12l.04-.01.1-.02.05-.02.03-.01.06-.02.05-.03.03-.02h.02l.03-.02.04-.03.05-.04.02-.02.18-.18.02-.04.05-.09.01-.02a1 1 0 0 0 .09-.3v-.11L13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Fill.displayName = 'Clock11Fill';

// Triple export pattern (lucide-react style)
export { Clock11Fill, Clock11Fill as Clock11FillIcon, Clock11Fill as SiClock11Fill };
export type { Clock11FillProps };

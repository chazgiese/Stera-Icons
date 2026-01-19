import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock10FillProps = Omit<IconBaseProps, 'children'>;

const Clock10Fill = memo(
  forwardRef<SVGSVGElement, Clock10FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v4.27L9.04 9.13a1 1 0 0 0-1 1.74l3.46 2 .1.05.05.01.04.02.04.01.06.02h.02l.08.01h.1L12 13h.02l.22-.03h.03l.23-.1.04-.03.05-.03.03-.03.07-.06.04-.04.03-.03A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Fill.displayName = 'Clock10Fill';

// Triple export pattern (lucide-react style)
export { Clock10Fill, Clock10Fill as Clock10FillIcon, Clock10Fill as SiClock10Fill };
export type { Clock10FillProps };

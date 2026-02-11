import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillProps = Omit<IconBaseProps, 'children'>;

const Clock10Fill = memo(
  forwardRef<SVGSVGElement, Clock10FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v3.27L9.04 9.13a1 1 0 0 0-1 1.74l3.46 2 .1.05.05.01.04.02.04.01.06.02h.02l.08.01h.1L12 13h.02l.22-.03h.03l.23-.1.04-.03.05-.03.03-.03.07-.06.04-.04.03-.03A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Fill.displayName = 'Clock10Fill';

// Triple export pattern (lucide-react style)
export { Clock10Fill, Clock10Fill as Clock10FillIcon, Clock10Fill as SiClock10Fill };
export default Clock10Fill;
export type { Clock10FillProps };

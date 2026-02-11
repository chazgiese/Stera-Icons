import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillProps = Omit<IconBaseProps, 'children'>;

const Clock4Fill = memo(
  forwardRef<SVGSVGElement, Clock4FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5.09l.01.04.02.1v.04l.03.07v.02l.04.07v.02l.06.1.02.03.18.18.02.02.05.04.04.03.03.02 3.46 2a1 1 0 0 0 1-1.74L13 11.43V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Fill.displayName = 'Clock4Fill';

// Triple export pattern (lucide-react style)
export { Clock4Fill, Clock4Fill as Clock4FillIcon, Clock4Fill as SiClock4Fill };
export default Clock4Fill;
export type { Clock4FillProps };

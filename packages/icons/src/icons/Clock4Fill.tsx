import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillProps = Omit<IconBaseProps, 'children'>;

const Clock4Fill = memo(
  forwardRef<SVGSVGElement, Clock4FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5.02l.01.14q.03.15.1.28l.03.04.01.02.09.1.03.04.03.02.03.03.04.02.04.04h.02l3.47 2c.41.25.95.1 1.2-.31.23-.42.09-.96-.33-1.2l-3.03-1.75V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Fill.displayName = 'Clock4Fill';

// Triple export pattern
export { Clock4Fill, Clock4Fill as Clock4FillIcon, Clock4Fill as SiClock4Fill };
export default Clock4Fill;
export type { Clock4FillProps };

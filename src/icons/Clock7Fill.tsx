import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillProps = Omit<IconBaseProps, 'children'>;

const Clock7Fill = memo(
  forwardRef<SVGSVGElement, Clock7FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v4.73l-1.87 3.23a1 1 0 0 0 1.74 1l2-3.46v-.02l.02-.03.03-.05.02-.06.01-.03.02-.06v-.04l.01-.03.02-.17V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Fill.displayName = 'Clock7Fill';

// Triple export pattern (lucide-react style)
export { Clock7Fill, Clock7Fill as Clock7FillIcon, Clock7Fill as SiClock7Fill };
export default Clock7Fill;
export type { Clock7FillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillProps = Omit<IconBaseProps, 'children'>;

const Clock6Fill = memo(
  forwardRef<SVGSVGElement, Clock6FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Fill.displayName = 'Clock6Fill';

// Triple export pattern (lucide-react style)
export { Clock6Fill, Clock6Fill as Clock6FillIcon, Clock6Fill as SiClock6Fill };
export default Clock6Fill;
export type { Clock6FillProps };

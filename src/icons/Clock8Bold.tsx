import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8BoldProps = Omit<IconBaseProps, 'children'>;

const Clock8Bold = memo(
  forwardRef<SVGSVGElement, Clock8BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-bold" {...props}>
      <path d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-.14.51l-.02.02a1 1 0 0 1-.33.33h-.01l-3.46 2a1 1 0 0 1-1-1.73l2.96-1.7V7a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Bold.displayName = 'Clock8Bold';

// Triple export pattern (lucide-react style)
export { Clock8Bold, Clock8Bold as Clock8BoldIcon, Clock8Bold as SiClock8Bold };
export default Clock8Bold;
export type { Clock8BoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6BoldProps = Omit<IconBaseProps, 'children'>;

const Clock6Bold = memo(
  forwardRef<SVGSVGElement, Clock6BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-bold" {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Bold.displayName = 'Clock6Bold';

// Triple export pattern (lucide-react style)
export { Clock6Bold, Clock6Bold as Clock6BoldIcon, Clock6Bold as SiClock6Bold };
export default Clock6Bold;
export type { Clock6BoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9BoldProps = Omit<IconBaseProps, 'children'>;

const Clock9Bold = memo(
  forwardRef<SVGSVGElement, Clock9BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-bold" {...props}>
      <path d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h3V7a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Bold.displayName = 'Clock9Bold';

// Triple export pattern (lucide-react style)
export { Clock9Bold, Clock9Bold as Clock9BoldIcon, Clock9Bold as SiClock9Bold };
export default Clock9Bold;
export type { Clock9BoldProps };

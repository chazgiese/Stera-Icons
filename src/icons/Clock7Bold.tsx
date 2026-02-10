import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7BoldProps = Omit<IconBaseProps, 'children'>;

const Clock7Bold = memo(
  forwardRef<SVGSVGElement, Clock7BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-bold" {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v5l-.02.18v.03l-.01.04-.02.06-.01.03-.02.06v.01l-.05.07v.02l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Bold.displayName = 'Clock7Bold';

// Triple export pattern (lucide-react style)
export { Clock7Bold, Clock7Bold as Clock7BoldIcon, Clock7Bold as SiClock7Bold };
export default Clock7Bold;
export type { Clock7BoldProps };

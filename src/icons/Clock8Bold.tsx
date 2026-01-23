import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8BoldProps = Omit<IconBaseProps, 'children'>;

const Clock8Bold = memo(
  forwardRef<SVGSVGElement, Clock8BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.14.51l-.02.02a1 1 0 0 1-.33.33h-.01l-3.46 2a1 1 0 0 1-1-1.73l2.96-1.7V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Bold.displayName = 'Clock8Bold';

// Triple export pattern (lucide-react style)
export { Clock8Bold, Clock8Bold as Clock8BoldIcon, Clock8Bold as SiClock8Bold };
export default Clock8Bold;
export type { Clock8BoldProps };

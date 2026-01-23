import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12BoldProps = Omit<IconBaseProps, 'children'>;

const Clock12Bold = memo(
  forwardRef<SVGSVGElement, Clock12BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Bold.displayName = 'Clock12Bold';

// Triple export pattern (lucide-react style)
export { Clock12Bold, Clock12Bold as Clock12BoldIcon, Clock12Bold as SiClock12Bold };
export default Clock12Bold;
export type { Clock12BoldProps };

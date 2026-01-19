import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock6BoldProps = Omit<IconBaseProps, 'children'>;

const Clock6Bold = memo(
  forwardRef<SVGSVGElement, Clock6BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock6Bold.displayName = 'Clock6Bold';

// Triple export pattern (lucide-react style)
export { Clock6Bold, Clock6Bold as Clock6BoldIcon, Clock6Bold as SiClock6Bold };
export default Clock6Bold;
export type { Clock6BoldProps };

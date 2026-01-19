import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock9BoldProps = Omit<IconBaseProps, 'children'>;

const Clock9Bold = memo(
  forwardRef<SVGSVGElement, Clock9BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Bold.displayName = 'Clock9Bold';

// Triple export pattern (lucide-react style)
export { Clock9Bold, Clock9Bold as Clock9BoldIcon, Clock9Bold as SiClock9Bold };
export default Clock9Bold;
export type { Clock9BoldProps };

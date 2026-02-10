import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock12RegularDuotone = memo(
  forwardRef<SVGSVGElement, Clock12RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

Clock12RegularDuotone.displayName = 'Clock12RegularDuotone';

// Triple export pattern (lucide-react style)
export { Clock12RegularDuotone, Clock12RegularDuotone as Clock12RegularDuotoneIcon, Clock12RegularDuotone as SiClock12RegularDuotone };
export default Clock12RegularDuotone;
export type { Clock12RegularDuotoneProps };
